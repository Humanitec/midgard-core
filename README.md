# midgard-core
Frontend core module written in pure JavaScript providing common capabilities. It is published as an npm package and used as a dependency in the framework specific wrappers (midgard-angular, midgard-react).

The purpose of this project is to provide a common core for all Midgard implementations. All capabilities developed in this project should be generic enough that they would not force any of the framework specific implementations on top of it to adopt patterns which are not natural for those respective frameworks.

Currently, midgard-core implements 4 major features: an **HTTP Client**, a **Redux Store**, an **oAuth Client**, and a **Logging Library**

### HTTP Client
The HTTP Client exposes just one method which allows developers to make HTTP requests of all kinds. This method - `request` - in turn wraps the [axios library](https://www.npmjs.com/package/axios). 

### Redux Store
Plain Redux store implemented by the [redux npm package](https://www.npmjs.com/package/redux), with [redux-observable](https://www.npmjs.com/package/redux-observable) on top to provide Observables support. The package exposes `createStore`, `createSelector`, `combineReducers`, `combineEpics`, `ofType`, `createEpicMiddleware`, `applyMiddleware` and `compose`. This offers felxibility to either adopt one or both packages in the framework specific implementations of Midgard.

### oAuth Client
Simple oAuth client which currently only supports credential based authentication provided through `authenticateWithCredentials`

### Logging Library
Exposes a Logger class which can be instantiated with a few options which configure behavior:
* logToConsole - whether or not logged messages should be logged to the console as well
* logToServer - whether or not logged messages should be logged to the server as well
* APIURL - the server endpoint to send logged messages to. If this is not defined, logged messages will go to whatever endpoint was defined in environment variables for the deployment.

Logged messages can be categorized into various levels. Currently, those levels are `LOG`, `TRACE`, `DEBUG`, `WARN`, and `ERROR`. The logger will attempt to route messages to the correct console method, if it is available, based on the logLevel defined. Server side logging will also separate log messages based on these categories.
