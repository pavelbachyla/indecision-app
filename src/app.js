console.log(React)
console.log(ReactDOM)

const app = {
    tittle: 'Indecision App',
    subtitle: 'First react app',
    options: []
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

function renderIndecisionApp() {
    const template = (
        <div>
            <h1 id={'template-id'}>{app.tittle}</h1>
            {app.subtitle && <h2>{app.subtitle}</h2>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <p>{app.options.length}</p>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                <li>Item one</li>
                <li>Item two</li>
            </ol>
            <form onSubmit={onAddOption}>
                <input type='text' name='option'/>
                <button>Add</button>
            </form>
        </div>
    )

    ReactDOM.render(template, appRoot)
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