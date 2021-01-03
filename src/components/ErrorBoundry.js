import React from 'react'

export default class ErrorBoundery extends React.Component {

    state = {
        hasError: false,
        error: {},
        errorInfo: {}
    }

    componentDidCatch(error, errorInfo) {
        console.log("componentDidCatch-error", error);
        console.log("componentDidCatch-errorInfo", errorInfo);
        this.setState({
            hasError: true,
            error: error,
            errorInfo: errorInfo
        })
    }

    render() {
        return (
            < div >
                {this.state.hasError ?
                    this.props.render(this.state.error, this.state.errorInfo)
                    :
                    this.props.children}
            </div>
        )
    }
}