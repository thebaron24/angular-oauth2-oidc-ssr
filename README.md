# Angular Universal

This is a starter configuration for an Angular project with server side rendering using a node express server.

make sure you change your redirectUri for local testing

client side only: redirectUri: 'http://localhost:4200',

SSR + Client: redirectUri: 'http://localhost:4000',

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Server Side Rendering

Run `npm run build:ssr` to build the client side and server side projects. The build artifacts will be stored in the `dist/` directory. There will be a server.js and two folders for each app: `browser/` for the client side app and `server/` for the server side app. The `--prod` flag for a production build is set by default. You can change it in the package scripts..

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
