/* In order to enable, so plug-in redux into our app,
  we need to import couple of helpers coming from the
  redux library. We are also going to add some very useful
  addons (middleware) such as Redux Thunk for async actions
  and redux logger, console redux store debugger.

  in order to install those, we need to issue command:

      npm install --save redux react-redux redux-thunk redux-logger

*/
import {applyMiddleware, compose, createStore} from 'redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import appReducers from '@reducers';

const loggerMiddleware = createLogger();

export const configureStore = (initialState) => {
    return createStore(appReducers, initialState, compose(applyMiddleware(
        loggerMiddleware,
        thunkMiddleware
    )));
};