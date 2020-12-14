import { createStore } from 'redux'
import {count} from './reducer'

const store = createStore(count);
console.log(store);

export default store;
