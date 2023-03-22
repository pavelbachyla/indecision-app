import React from 'react'

class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this)
        this.state = {
            visible: false
        }
    }

    render() {
        return (
            <div>
                <h1>Visibility App</h1>
                <button onClick={this.toggleVisibility}>{this.state.visible ? 'Hide Details' : 'Show Details'}</button>
                {this.state.visible && <p>Hey! There are some details you can now see</p>}
            </div>
        )
    }

    toggleVisibility() {
        this.setState((prevState) => {
            return {
                visible: !prevState.visible
            }
        })
    }
}

export {VisibilityToggle}
