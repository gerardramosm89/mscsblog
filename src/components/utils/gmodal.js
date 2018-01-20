import React , { Component } from 'react';
/*
  In the parent component, to assign the modal body, just put text in between the component decorators.
  Example 1: <GModal>This is going to be the content of the modal</GModal>

  props to pass:
  buttonName - This will be the title of the button
  modalTitle - Title of the Modal

  Example 2:
  <GModal
  modalTitle={`This is the test title`} 
  buttonName={`TheButton`}>
    This is going to be the content of the modal
  primaryButtonText={`Save Changes`}
  secondaryButtonText={`Close`}
  </GModal>
*/
export default class GModal extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return(
      <div>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
          {this.props.buttonName ? this.props.buttonName : 'Default Button Name'}
        </button>
        <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  {this.props.modalTitle ? this.props.modalTitle : 'Modal title'}
                </h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {this.props.children}
              </div>
              <div className="modal-footer">
                {this.props.secondaryButtonText ? <button type="button" className="btn btn-secondary" data-dismiss="modal">{this.props.secondaryButtonText}</button> : <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>}
                
                {this.props.primaryButtonText ? <button type="button" className="btn btn-primary">{this.props.primaryButtonText}</button>: null}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}