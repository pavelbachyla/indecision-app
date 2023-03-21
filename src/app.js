console.log(React)
console.log(ReactDOM)

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleDeleteOptionSingular = this.handleDeleteOptionSingular.bind(this)
        this.state = {
            options: props.options
        }
    }

    componentDidMount() {
        try {
            console.log('Fetching data', localStorage.getItem('options'))
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)
            if (options) {
                this.setState(() => ({options}))
            }
        } catch (e) {
            console.error(e)
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            console.log('Saving data', prevProps, prevState)
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
        }
    }

    render() {
        const subtitle = 'Put your life in the hands of a computer'
        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action
                    handlePick={this.handlePick}
                    hasOptions={this.state.options.length > 0}/>
                <Options
                    handleDeleteOptions={this.handleDeleteOptions}
                    options={this.state.options}
                    handleDeleteOptionSingular={this.handleDeleteOptionSingular}
                />
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
        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        }))
    }

    handleDeleteOptionSingular(optionToRemove) {
        console.log('Delete', optionToRemove)
        this.setState((prevState) => ({options: prevState.options.filter(option => option !== optionToRemove)}))
    }
}

IndecisionApp.defaultProps = {
    options: ['Learn React', "Read a book about Architecture", 'Take a break']
}

const Header = (props) => {
    return (
        <div>
            <h1 id={'template-id'}>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
}
Header.defaultProps = {
    title: 'Indecision'
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
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add an option to get started!</p>}
            {
                props.options.map(option =>
                    <Option
                        key={Math.random()}
                        option={option}
                        handleDeleteOption={props.handleDeleteOptionSingular}
                    />
                )
            }
        </div>
    )
}

const Option = (props) => {
    return (
        <div>
            {props.option}
            <button onClick={(e) => {
                props.handleDeleteOption(props.option)
            }}>remove
            </button>
        </div>
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
        this.setState(() => ({
            error
        }))
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
            count: props.count
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

Counter.defaultProps = {
    count: 0
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'))