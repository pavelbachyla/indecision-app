const appRoot = document.getElementById('app')

let visible = false
function onVisibilityChanged() {
    visible = !visible
    renderVisibilityApp()
}

function renderVisibilityApp() {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={onVisibilityChanged}>{visible ? 'Hide Details' : 'Show Details'}</button>
            {visible && <p>Hey! There are some details you can now see</p>}
        </div>
    )
    ReactDOM.render(template, appRoot)
}

renderVisibilityApp()
