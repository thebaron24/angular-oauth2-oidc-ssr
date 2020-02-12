import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import {enableProdMode} from '@angular/core';
// Express Engine
import {ngExpressEngine} from '@nguniversal/express-engine';
// Import module map for lazy loading
import {provideModuleMap} from '@nguniversal/module-map-ngfactory-loader';
import {renderModuleFactory} from '@angular/platform-server';
import {REQUEST, RESPONSE} from '@nguniversal/express-engine/tokens';
import * as express from 'express';
import {join} from 'path';
import * as compression from 'compression';
import cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
import { dataMiddleware, Authorize } from './middleware';
import * as request from 'request';
import * as requestPromise from 'request-promise';



// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// Express server
const app = express();

app.use(compression());

app.use(cookieParser(process.env.SESSION_SECRET));

const PORT = process.env.PORT || 4000;
const DIST_FOLDER = join(process.cwd(), 'dist/browser');

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const {AppServerModuleNgFactory, LAZY_MODULE_MAP} = require('./dist/server/main');

// Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP),
  ]
}));

app.set('view engine', 'html');
app.set('views', DIST_FOLDER);

// Server static files from /browser
app.get('*.*', express.static(DIST_FOLDER, {
  maxAge: '1y'
}));

app.use('/api', bodyParser.json(), dataMiddleware, Authorize);

//api routes are protected by authorization bearer token
app.get('/api/test', (req, res) => {
  res.status(200).send({test: 'test body'});
});

// All regular routes use the Universal engine
app.get('*', (req, res) => {
  res.render('index', { 
  	req,
  	res,
  	providers: [
      {
        provide: 'REQUEST',
        useValue: (req)
      },
      {
        provide: 'RESPONSE',
        useValue: (res)
      }
    ]
  });
});

// Start up the Node server
app.listen(PORT, () => {
  console.log(`Node Express server listening on http://localhost:${PORT}`);
});
