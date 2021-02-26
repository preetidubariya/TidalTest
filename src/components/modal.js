import React, { Component } from 'react';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:'',
            category:'',
            image:'',
            des:'',
            quantity:''
            }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            id : nextProps.id,
            category : nextProps.category,
            des : nextProps.des,
            quantity : nextProps.quantity
        });
    }

    render() {
        return (
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Seeds/Seedlings {this.state.category} </h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <h6>Description : Del Monte Raw Flax Seeds Pouch, 250 g  {this.state.des} </h6>
                            <h6>Quantity : 3 {this.state.quantity} </h6>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;