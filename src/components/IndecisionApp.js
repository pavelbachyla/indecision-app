import React from 'react'
import ReactDOM from 'react-dom'
import {AddOption} from './AddOption'
import {Header} from "./Header";
import {Options} from "./Options";
import {Action} from "./Action";
import {OptionModal} from "./OptionModal";

console.log(React)
console.log(ReactDOM)

class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    }
    handleDeleteOptions = () => {
        this.setState(() => {
            return {
                options: []
            }
        })
    }
    handlePick = () => {
        const randomNumber = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNumber];
        this.setState(() => ({selectedOption: option}))
    }
    handleAddOption = (option) => {
        if (!option) {
            return 'Enter a valid value to add'
        } else if (this.state.options.indexOf(option) !== -1) {
            return 'This option already exists'
        }
        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        }))
    }
    handleDeleteOptionSingular = (optionToRemove) => {
        console.log('Delete', optionToRemove)
        this.setState((prevState) => ({options: prevState.options.filter(option => option !== optionToRemove)}))
    }

    clearSelectedOption = () => {
        this.setState(() => ({selectedOption: undefined}))
    }

    componentDidMount() {
        try {
            console.log('Fetching data', localStorage.getItem('options'))
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)
            if (options) {
                this.setState(() => ({options}))
            }
        } catch (e) {
            console.error(e)
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            console.log('Saving data', prevProps, prevState)
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
        }
    }

    render() {
        const subtitle = 'Put your life in the hands of a computer'
        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action
                    handlePick={this.handlePick}
                    hasOptions={this.state.options.length > 0}/>
                <Options
                    handleDeleteOptions={this.handleDeleteOptions}
                    options={this.state.options}
                    handleDeleteOptionSingular={this.handleDeleteOptionSingular}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                    options={this.state.options}
                />
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    clearSelectedOption={this.clearSelectedOption}>
                </OptionModal>
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options: ['Learn React', "Read a book about Architecture", 'Take a break']
}

export {IndecisionApp}