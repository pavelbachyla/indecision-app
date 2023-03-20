console.log(React)
console.log(ReactDOM)

let template = <p id={'template-id'}>The React template content. Change detector</p>
let appRoot = document.getElementById('app')
ReactDOM.render(template, appRoot)