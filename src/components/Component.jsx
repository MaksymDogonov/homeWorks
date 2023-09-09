import React from "react";
import Modal from "./Modal"

export default class Component extends React.Component {
    state = { modal: false };

    toggle = (e) => {
        this.setState({
            modal: !this.state.modal,
        });
    }

    render() {
        return (
            <div>
                <button type="button" className="modal-open-button btn btn-danger" onClick={this.toggle}>Open</button>
                <Modal isOpen={this.state.modal} onClose={this.toggle}>
                </Modal>
            </div>
        );
    }
}
