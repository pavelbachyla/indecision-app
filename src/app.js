console.log(React)
console.log(ReactDOM)

const app = {
    tittle: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
}


class IndecisionApp extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
                <p>{app.options.length}</p>
                <Action/>
                <button onClick={onRemoveAll}>Remove All</button>
                <Options/>
                <AddOption/>
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1 id={'template-id'}>{app.tittle}</h1>
                {app.subtitle && <h2>{app.subtitle}</h2>}
            </div>
        )
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button onClick={onMakeDecision} disabled={app.options.length === 0}>What should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    render() {
        return (
            <ol>
                {
                    app.options.map(option => <li key={option}>{option}</li>)
                }
            </ol>
        )
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <form onSubmit={onAddOption}>
                <input type='text' name='option'/>
                <button>Add</button>
            </form>
        )
    }

}

const onAddOption = e => {
    e.preventDefault()
    const option = e.target.elements['option']
    console.log('Form submitted', option.value)
    if (option) {
        app.options.push(option.value)
        option.value = ''
        renderIndecisionApp()
    }
    console.log('Available options:', app.options)
}

const onRemoveAll = () => {
    app.options = []
    renderIndecisionApp()
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

function onMakeDecision() {
    const randomNumber = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNumber];
    console.log('Random option:', option)
}

function renderIndecisionApp() {
    ReactDOM.render(<IndecisionApp />, appRoot)
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