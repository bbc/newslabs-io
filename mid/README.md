# Newslabs XOXO

## App Structure

### Client

The source code for this is in the `src/client` directory.

This app includes a stand-alone react-based client application, written in TypeScript.
This application is built by webpack and ts-loader _only_, and does not make use of babel.

The webpack config also creates an index.html to load the react application.

### API

The source code for this is in the `src/api` directory.

This app includes a stand-alone express-based API server application, written in TypeScript

### Scripts
#### start
The `npm start` script launches the `./src/server.ts` file, with the webpack middleware, and including the API express app.

On `/` it serves the index.html creared by webpack to load the client react application.
It also serves other routes as defined by the API express app.

#### build
The `npm build` script runs two commands:
- webpack: To build the client application. This will be output into `dist/client`.
- tsc: To build the server-side application. This will be output into `dist/api`.

Note that webpack uses a different tsconfig file than tsc does.
