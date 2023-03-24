import React from 'react'

class AddOption extends React.Component {
    state = {
        error: undefined
    }
    handleAddOption = (e) => {
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

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type='text' name='option'/>
                    <button className='button'>Add Option</button>
                </form>
            </div>
        )
    }
}

export {AddOption}