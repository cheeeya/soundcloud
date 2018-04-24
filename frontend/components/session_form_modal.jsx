import React from 'react';
import AriaModal from 'react-aria-modal';
import SessionFormContainer from './session_form_container';

class SessionFormModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalActive : false
    };
    this.activateModal = this.activateModal.bind(this);
    this.deactivateModal = this.deactivateModal.bind(this);
    this.getApplicationNode = this.getApplicationNode.bind(this);
    window.triggerLogin = this.activateModal.bind(this);
  }

  activateModal() {
    this.setState({ modalActive: true });
  }

  deactivateModal() {
    this.props.receiveFormType("");
    this.setState({ modalActive: false });
  }

  getApplicationNode() {
    return document.getElementById(this.props.loc);
  }

  render() {
    const sessionFormModal = this.state.modalActive
      ? <AriaModal
          titleText='login-form'
          onExit={this.deactivateModal}
          getApplicationNode={this.getApplicationNode}
        >
          <div id='session-form-modal' className='modal'>
            <SessionFormContainer />
          </div>
        </AriaModal>
      : false;

    let buttonElements = (
      <div className={`${this.props.loc}-session-bttns`}>
        <button
          id={`${this.props.loc}-signin-btn`}
          className="session-button signin-btn"
          onClick={this.activateModal}
        >
          Sign in
        </button>
        <button
          id={`${this.props.loc}-register-btn`}
          className="session-button"
          onClick={this.activateModal}
        >
          Create account
        </button>
      </div>
    );

    if (this.props.loc === 'splash-notice') {
      buttonElements = (
        <div className="splash-bttn">
          <button
            id="big-signup-bttn"
            className="session-button"
            onClick={this.activateModal}
          >
            Sign Up for Free
          </button>
        </div>
      )
    }
    return (
      <div className="session-button-div">
        {buttonElements}
        {sessionFormModal}
      </div>
    );
  }
}

export default SessionFormModal;
