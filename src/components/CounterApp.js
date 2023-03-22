import React from "react";

class CounterApp extends React.Component {
    constructor(props) {
        super(props);
        this.reset = this.reset.bind(this)
        this.minusOne = this.minusOne.bind(this)
        this.plusOne = this.plusOne.bind(this)
        this.state = {
            count: props.count
        }
    }

    componentDidMount() {
        const count = parseInt(localStorage.getItem('count'))
        if (!isNaN(count)) {
            this.setState(() => ({count}))
        }
    }

    componentDidUpdate(prevState) {
        if (prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count)
        }
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.plusOne}>+1</button>
                <button onClick={this.minusOne}>-1</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        )
    }

    minusOne() {
        this.setState((prevState) => ({
            count: prevState.count - 1
        }));
    }

    plusOne() {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }));
    }

    reset() {
        this.setState(() => ({
            count: 0
        }));
    }
}

CounterApp.defaultProps = {
    count: 0
}

export {CounterApp}