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

let name = 'Pavel';
let age = 27;
let country = 'Georgia';
let templateTwo = (
    <div>
        <h1>{name}</h1>
        <p>Age: {age}</p>
        <p>Location: {country}</p>
    </div>
)

let appRoot = document.getElementById('app')
ReactDOM.render(templateTwo, appRoot)