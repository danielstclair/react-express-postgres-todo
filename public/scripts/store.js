// Boilerplate for creating our stores.
// Here we're connecting all our middlewares to our reducers.

import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

export default createStoreWithMiddleware(reducers);
