import React , {Component}from 'react'

class App extends Component {
    constructor(props) {
        super(props)

        this.state={
            count : 0
        }

        this.increment = this.increment.bind(this);
    }

    render() {
        const ui = (<div>
            <input type="text" name="" id="" ref={input => this.inputField = input}/>
            <button onClick={this.increment}>点击加1</button>
            <button onClick={this.decrement}>点击减1</button>
            <button onClick={this.incrementByOdd}>点击奇数加1</button>
            <button onClick={this.incrementByInputField}>点击加输入框中的值</button>
            <p>the count is {this.state.count}</p>
        </div>);
        return ui;
    }

    increment() {
        this.setState( {count: this.state.count+1} );
    }

    decrement = () => {
        this.setState( {count: this.state.count-1} );
    }

    incrementByOdd = () => {
        if( this.state.count % 2 != 0 )
            this.setState( {count: this.state.count+1} );
    }

    incrementByInputField = () => {
        this.setState( {count: this.state.count+this.inputField.value} );
    }
}

export default App;