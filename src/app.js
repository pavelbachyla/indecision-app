console.log(React)
console.log(ReactDOM)

const app = {
    tittle: 'Indecision App',
    subtitle: 'First react app',
    options: ['one', 'two']
}

const template = (
    <div>
        <h1 id={'template-id'}>{app.tittle}</h1>
        {app.subtitle && <h2>{app.subtitle}</h2>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>)

const user = {
    name: 'Pavel',
    age: 27,
    country: 'Georgia'
}

function getCountry(country) {
    if (country) {
        return <p>Country: {country}</p>
    }
}

function getAge(age) {
    return (age && age >= 18) && <p>Age: {age}</p>
}

const templateTwo = (
    <div>
        <h1>{user.name ? user.name.toUpperCase(): 'Anonymous'}</h1>
        {getAge(user.age)}
        {getCountry(user.country)}
    </div>
)

const appRoot = document.getElementById('app')
ReactDOM.render(template, appRoot)