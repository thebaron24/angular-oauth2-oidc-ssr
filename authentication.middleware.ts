import * as jwt from 'jsonwebtoken';
import * as jwksClient from 'jwks-rsa';
import * as request from 'request';
import * as requestPromise from 'request-promise';

import { UnauthorizedError} from './custom.errors';

const DataExtract: any = async (req, res, next) => {


  const headers = req.headers;
  const headerToken = headers.authorization || headers.access_token || null;
  let data: any = {};
  let parts;
  let scheme;
  let credentials;

  if(headerToken) {
    
    parts = headerToken.split(' ');

    if(parts.length === 2) {
      scheme = parts[0];
      credentials = parts[1]
    } else {
      credentials = parts[0];
    }

  } 

  const token = credentials;
  data.token = token;
  data.scheme = scheme;

  req.data = data;

  next()
}

const Authorize: any = async (req, res, next) => {
  
  const oidcEndpoint = '/.well-known/openid-configuration';

  let data = req.data;
  let discovery_document_string;
  let discovery_document;
  let decoded_token;
  let keys;


  try {
    if(!data.token) throw new UnauthorizedError('no_authorization_token', { message: 'No authorization token' });

    try {
      decoded_token = jwt.decode(data.token, { complete: true }) || {};
    } catch (error) {
      throw new UnauthorizedError('invalid_token', error);
    }

    try {
      discovery_document = await requestPromise(decoded_token.payload.iss + oidcEndpoint);
    } catch (error) {
      throw new UnauthorizedError('discovery_document_error', error);
    }

    discovery_document = JSON.parse(discovery_document);

    try {
      keys = await requestPromise(discovery_document.jwks_uri);
    } catch (error) {
      throw new UnauthorizedError('jkws_keys_endpoints_error', error);
    }

    const kid = decoded_token.header.kid;
    const alg = decoded_token.header.alg;
    const jwksUri = discovery_document.jwks_uri;
    const options = {kid, alg, jwksUri};

    let client;

    try {
      client = jwksClient(options);
    } catch (error) {
      throw new UnauthorizedError('jwks_error', error);
    }

    client.getSigningKey(kid, (error, key) => {

      if(error) throw new UnauthorizedError('get_signing_key_error', error);

      const signingKey = key.getPublicKey();

      jwt.verify(data.token, signingKey, options, (err, identity) =>{
        if(error) throw new UnauthorizedError('jwt_verrify_error', err);
        console.log("identity", identity);
        req.data.identity = identity;
        req.data.access = 'Authorized';
        next()
      })
    });

  } catch (error) {
    res.status(401).json(error);
  }
}

export { DataExtract, Authorize}