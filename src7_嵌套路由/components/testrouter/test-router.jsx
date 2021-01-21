import React from 'react'
import { Link, HashRouter, BrowserRouter, Route, Switch } from 'react-router-dom'

import Page1 from './page1'
import Page2 from './page2'
import Parent1 from './parent1'
import Child1 from './child1'

export default class TestRouter extends React.Component {
    render() {
        return (
            <HashRouter>
                <div><Link to="/page1">Page1</Link></div>
                <div><Link to="/page2">Page2</Link></div>
                <div><Link to="/parent1">Parent1</Link></div>
                <hr />
                <div>
                    {/* <Switch> */}
                        <Route path="/page1" component={Page1}></Route>
                        <Route path="/page2" component={Page2}></Route>
                        <Route path="/parent1" component={Parent1}></Route>
                        <Parent1>
                            <Route path="/parent1/child1" component={Child1}></Route>
                        </Parent1>
                    {/* </Switch> */}
                </div>
            </HashRouter>
        )
    }
}