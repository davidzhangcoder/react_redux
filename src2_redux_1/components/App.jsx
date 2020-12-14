import React , {Component}from 'react'
import {INCREMENT, DECREMENT} from '../redux/action_types'

class App extends Component {
    constructor(props) {
        super(props)

        // this.state={
        //     count : 0
        // }

        this.increment = this.increment.bind(this);
    }

    render() {
        const ui = (<div>
            <input type="text" name="" id="" ref={input => this.inputField = input}/>
            <button onClick={this.increment}>点击加1</button>
            <button onClick={this.decrement}>点击减1</button>
            <button onClick={this.incrementByOdd}>点击奇数加1</button>
            <button onClick={this.incrementByInputField}>点击加输入框中的值</button>
            <p>the count is {this.props.store.getState().count}</p>
        </div>);
        return ui;
    }

    increment() {
        //this.setState( {count: this.state.count+1} );
        this.props.store.dispatch({type:INCREMENT, data:1});
    }

    decrement = () => {
        //this.setState( {count: this.state.count-1} );
        this.props.store.dispatch({type:DECREMENT, data:1});
    }

    incrementByOdd = () => {
        if( this.props.store.getState().count % 2 != 0 ) {
            //this.setState( {count: this.state.count+1} );
            this.props.store.dispatch({type:INCREMENT, data:1});
        }
    }

    incrementByInputField = () => {
        //this.setState( {count: this.state.count+this.inputField.value} );
        this.props.store.dispatch({type:INCREMENT, data:this.inputField.value*1});
    }
}

export default App;