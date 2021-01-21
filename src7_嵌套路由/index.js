import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import App from './containers/AppContainer';
import store from './redux/store'
import Error from './components/Error'
import ErrorBoundery from './components/ErrorBoundry'
import Outter from './components/outter'
import Inner from './components/inner'
import TestRouter from './components/testrouter/test-router'


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
            {/* <App></App> */}

            {/* src6_ErrorBoundry_and_组件嵌套 */}
            {/* <Outter>
                <Inner/>
            </Outter>
            <ErrorBoundery render={ (error,errorInfo) => <p>有错误发生</p>}>
                <Error />
            </ErrorBoundery> */}

            {/* src7_嵌套路由 */}
            {/* <TestRouter/> */}

        </Provider>
    ), document.getElementById('app'))
