import { createStore , applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import {count} from './reducer'

const store = createStore(count,applyMiddleware(thunk));
console.log(store);

export default store;
