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

let counter = 0

const increment = () => {
    counter++
    console.log("Increment")
    renderCounterApp()
};

const decrement = () => {
    counter--
    console.log("Decrement")
    renderCounterApp()
};

const reset = () => {
    counter = 0
    console.log("Reset")
    renderCounterApp()
};


const appRoot = document.getElementById('app')

function renderIndecisionApp() {
    ReactDOM.render(<IndecisionApp/>, appRoot)
}

function renderCounterApp() {
    const templateTwo = (
        <div>
            <h1>Count: {counter}</h1>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    )

    ReactDOM.render(templateTwo, appRoot)
}

renderIndecisionApp()