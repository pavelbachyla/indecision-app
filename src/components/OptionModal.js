import React from 'react'
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        contentLabel={"Selected Option: " + props.selectedOption}
        onRequestClose={props.clearSelectedOption}
        appElement={document.getElementById('app')}
        closeTimeoutMS={200}
        className='modal'>
        <div>
            <h3 className='modal__title'>Selected option</h3>
            {props.selectedOption && <p className='modal__body'>{props.selectedOption}</p>}
            <button className='button' onClick={props.clearSelectedOption}>OK</button>
        </div>
    </Modal>
)

export {OptionModal}