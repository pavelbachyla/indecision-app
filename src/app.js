console.log(React)
console.log(ReactDOM)

let template = (
    <div>
        <h1 id={'template-id'}>Indecision App</h1>
        <p>Paragraph</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>)

let user = {
    name: 'Pavel',
    age: 27,
    country: 'Georgia'
}
let templateTwo = (
    <div>
        <h1>{user.name.toUpperCase()}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.country}</p>
    </div>
)

let appRoot = document.getElementById('app')
ReactDOM.render(templateTwo, appRoot)