import React, { Component } from 'react'
import ReactTypes from 'prop-types';

class App extends Component {
    constructor(props) {
        super(props)

        // this.state={
        //     count : 0
        // }

        this.increment = this.increment.bind(this);
    }

    static propTypes = {
        count: ReactTypes.number.isRequired,
        incrementActionCreator: ReactTypes.func.isRequired,
        decrementActionCreator: ReactTypes.func.isRequired,
        incrementActionAsyncCreator: ReactTypes.func.isRequired
    }

    render() {
        const ui = (<div>
            <input type="text" name="" id="" ref={input => this.inputField = input} />
            <button onClick={this.increment}>点击加1</button>
            <button onClick={this.decrement}>点击减1</button>
            <button onClick={this.incrementByOdd}>点击奇数加1</button>
            <button onClick={this.incrementByInputField}>点击加输入框中的值</button>
            <button onClick={this.incrementByInputFieldAsync}>点击异步加</button>
            <p>the count is {this.props.count}</p>
        </div>);
        return ui;
    }

    increment() {
        //this.setState( {count: this.state.count+1} );
        this.props.incrementActionCreator(1);
    }

    decrement = () => {
        //this.setState( {count: this.state.count-1} );
        this.props.decrementActionCreator(1);
    }

    incrementByOdd = () => {
        if (this.props.count % 2 != 0) {
            //this.setState( {count: this.state.count+1} );
            this.props.incrementActionCreator(1);
        }
    }

    incrementByInputField = () => {
        //this.setState( {count: this.state.count+this.inputField.value} );
        this.props.incrementActionCreator(this.inputField.value * 1);
    }

    incrementByInputFieldAsync = () => {
        // setTimeout( ()=>{
        //     this.props.incrementActionCreator(this.inputField.value * 1);
        // },3000);

        this.props.incrementActionAsyncCreator(this.inputField.value * 1);
    }
}

export default App;