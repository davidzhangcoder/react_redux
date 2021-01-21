import React from 'react'

const Form = (props) => {
    let tokenInput = null;
    let nameInput = null;
    
    const doSubmit = (e) => {
        e.preventDefault();
        console.log( tokenInput.value, nameInput.value )
        const { setResult } = props
        const result = {token:tokenInput.value, name:nameInput.value}
        setResult(result);
    }

    return (
        <div>
            <form>
                <input
                    type="text"
                    name="token"
                    placeholder="Enter your token"
                    ref={ e => tokenInput = e}
                >
                </input>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    ref={ e => nameInput = e}
                >
                </input>

                <button onClick={doSubmit}>submit</button>
            </form>
        </div>
    );
}

const FormApp = () => {
    const setResult = (result) => {
        console.log("Result is: ", result);
    }

    return (
        <div>
            <Form setResult={setResult}></Form>
        </div>
    );
}

export default FormApp;