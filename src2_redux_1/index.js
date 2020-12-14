import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'

import App from './components/App';
import {count} from './redux/reducer'

const store = createStore(count);
console.log(store);

function render() {
    ReactDOM.render(
        (
            <App store={store}></App>
        ), document.getElementById('app'))
}

render();

store.subscribe(render)