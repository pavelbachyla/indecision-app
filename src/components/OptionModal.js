import React from 'react'
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        contentLabel={"Selected Option: " + props.selectedOption}
        onRequestClose={props.clearSelectedOption}
        appElement={document.getElementById('app')}>
        <div>
            <h2>Selected option</h2>
            {props.selectedOption && <p>{props.selectedOption}</p>}
            <button onClick={props.clearSelectedOption}>OK</button>
        </div>
    </Modal>
)

export {OptionModal}