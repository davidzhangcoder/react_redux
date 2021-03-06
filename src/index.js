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
import TestHooker1 from './components/testhooker/test_hooker1'
import FormApp from './components/testhooker/testhooker2/test_hooker2_formapp'
import ToDoList from './components/testhooker/testhooker3/test_hooker3_todolist'
import TestHooker4 from './components/testhooker/testhooker4'
import TestHooker5 from './components/testhooker/testhooker5'
import TestHooker6 from './components/testhooker/testhooker6'
import TestHooker7 from './components/testhooker/testhooker7'
import TestHooker8 from './components/testhooker/testhooker8'
import TestHooker9 from './components/testhooker/testhooker9'

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

            {/* src8_TestHooker */}
            {/* <TestHooker1/> */}
            {/* <FormApp></FormApp> */}
            {/* <ToDoList></ToDoList> */}
            {/* <TestHooker4></TestHooker4> */}
            {/* <TestHooker5></TestHooker5> */}
            {/* <TestHooker6></TestHooker6> */}
            {/* <TestHooker7></TestHooker7> */}
            {/* <TestHooker8></TestHooker8> */}
            <TestHooker9></TestHooker9>
        </Provider>
    ), document.getElementById('app'))
