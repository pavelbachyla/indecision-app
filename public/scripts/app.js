console.log(React)
console.log(ReactDOM)

let template = React.createElement(
    'p',
    {id: 'template-id'},
    'The React template content'
)
let appRoot = document.getElementById('app')
ReactDOM.render(template, appRoot)