import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import App from './containers/AppContainer';
import store from './redux/store'

// function render() {
//     ReactDOM.render(
//         (
//             <App store={store}></App>
//         ), document.getElementById('app'))
// }

// render();

// store.subscribe(render)

ReactDOM.render(
    (
        <Provider store={store}>
            <App></App>
        </Provider>
    ), document.getElementById('app'))
