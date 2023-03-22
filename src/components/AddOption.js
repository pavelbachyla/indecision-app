import React from 'react'

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error: undefined
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type='text' name='option'/>
                    <button>Add</button>
                </form>
            </div>
        )
    }

    handleAddOption(e) {
        e.preventDefault()
        const option = e.target.elements['option']
        const error = this.props.handleAddOption(option.value);
        this.setState(() => ({
            error
        }))
        if (!error) {
            option.value = ''
        }
    }
}

export {AddOption}