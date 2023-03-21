console.log(React)
console.log(ReactDOM)

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            options: ['Learn React', "Read a book about Architecture", 'Take a break']
        }
    }

    render() {
        const title = 'Indecision App'
        const subtitle = 'Put your life in the hands of a computer'
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action
                    handlePick={this.handlePick}
                    hasOptions={this.state.options.length > 0}/>
                <Options
                    handleDeleteOptions={this.handleDeleteOptions}
                    options={this.state.options}/>
                <AddOption
                    handleAddOption={this.handleAddOption}
                    options={this.state.options}
                />
            </div>
        )
    }

    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            }
        })
    }

    handlePick() {
        const randomNumber = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNumber];
        console.log('You should:', option)
    }

    handleAddOption(option) {
        if (!option) {
            return 'Enter a valid value to add'
        } else if (this.state.options.indexOf(option) !== -1) {
            return 'This option already exists'
        }
        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            }
        })
    }
}

const Header = (props) => {
    return (
        <div>
            <h1 id={'template-id'}>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
}

const Action = (props) => {
    return (
        <div>
            <button onClick={props.handlePick} disabled={!props.hasOptions}>What should I do?</button>
        </div>
    )
}

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Delete All</button>
            <ol>
                {
                    props.options.map(option => <Option key={Math.random()} option={option}/>)
                }
            </ol>
        </div>
    )
}

const Option = (props) => {
    return (
        <div>{props.option}</div>
    )
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error: undefined
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type='text' name='option'/>
                    <button>Add</button>
                </form>
            </div>
        )
    }

    handleAddOption(e) {
        e.preventDefault()
        const option = e.target.elements['option']
        const error = this.props.handleAddOption(option.value);
        this.setState(() => {
            return {error}
        })
        if (!error) {
            option.value = ''
        }
    }
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

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'))