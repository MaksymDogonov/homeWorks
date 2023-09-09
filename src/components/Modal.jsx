import {Component} from "react";

import './style/Modal.css'

class Modal extends Component {
    render() {
        const {isOpen, onClose} = this.props;
        return (
            <div>
                <div className={isOpen ? 'modal fade show' : 'modal'}
                     style={isOpen ? {display: 'block'} : {display: 'none'}} role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <div className="modal-title">Modal title</div>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                                        onClick={onClose}>X
                                </button>
                            </div>
                            <div className="modal-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit</div>
                            <div className="modal-footer">
                                <button type="button" className="modal-close-button btn btn-default"
                                        onClick={onClose}>Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;
