console.log(React)
console.log(ReactDOM)

const app = {
    options: []
}


class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision App'
        const subtitle = 'Put your life in the hands of a computer'
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action/>
                <Options options={app.options}/>
                <AddOption/>
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1 id={'template-id'}>{this.props.title}</h1>
                {this.props.subtitle && <h2>{this.props.subtitle}</h2>}
            </div>
        )
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.handlePick} disabled={app.options.length === 0}>What should I do?</button>
            </div>
        )
    }

    handlePick() {
        const randomNumber = Math.floor(Math.random() * app.options.length);
        const option = app.options[randomNumber];
        console.log('Random option: ', option)
    }
}

class Options extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this)
    }

    render() {
        return (
            <div>
                <p>{this.props.options.length > 0 ? 'Here are your options' : 'No options'}</p>
                <p>{this.props.options.length}</p>
                <button onClick={this.handleRemoveAll}>Remove All</button>
                <ol>
                    {
                        this.props.options.map(option => <Option key={Math.random()} option={option}/>)
                    }
                </ol>
            </div>
        )
    }

    handleRemoveAll() {
        app.options = []
        // renderIndecisionApp()
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>{this.props.option}</div>
        )
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <form onSubmit={this.handleAddOption}>
                <input type='text' name='option'/>
                <button>Add</button>
            </form>
        )
    }

    handleAddOption(e) {
        e.preventDefault()
        const option = e.target.elements['option']
        console.log('Form submitted', option.value)
        if (option) {
            app.options.push(option.value)
            option.value = ''
            // renderIndecisionApp()
        }
        console.log('Available options:', app.options)
    }

}


function renderIndecisionApp() {
    ReactDOM.render(<IndecisionApp/>, document.getElementById('app'))
}

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.reset = this.reset.bind(this)
        this.minusOne = this.minusOne.bind(this)
        this.plusOne = this.plusOne.bind(this)
        this.state = {
            count: 1
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
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })
    }

    plusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
    }

    reset() {
        this.setState(() => {
            return {
                count: 0
            }
        })
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'))

// renderIndecisionApp()