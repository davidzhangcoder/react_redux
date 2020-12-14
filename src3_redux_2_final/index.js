import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import store from './redux/store'

function render() {
    ReactDOM.render(
        (
            <App store={store}></App>
        ), document.getElementById('app'))
}

render();

store.subscribe(render)