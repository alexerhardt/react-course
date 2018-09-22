import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => ( 
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleClearSelectedOption}
        contentLabel="SelectedOption"
    >
        <h3>Selected Option</h3>
        {props.sectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.handleClearSelectedOption}>Okay</button>
    </Modal>
);

export default OptionModal;