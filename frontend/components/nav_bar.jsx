import React from 'react';
import { Link } from 'react-router-dom';
import SessionFormModal from './session_form_modal';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault;
    this.props.logout();
  }

  render () {
    const { currentUser } = this.props;
    let element = <SessionFormModal receiveFormType={this.props.receiveFormType} loc='nav-bar'/>
    if (currentUser) {
      element = (
        <div className="session-button-div">
          <button className="session-button" id='logout-btn' onClick={this.handleLogout}>Logout</button>
        </div>
      )
    }
    return (
      <header>
        <div id='nav-bar'>
          <div className="nav-logo">
            <Link to="/home" className="root-link"><img className="logo-blue" src="http://res.cloudinary.com/samueldchia/image/upload/v1517614712/LOGO-blue_v54gez.jpg"></img></Link>
          </div>
          <div className="left-nav">
            <Link to="/home"><div className="nav-link" id="home-link">Home</div></Link>
            <Link to="/collection"><div className="nav-link" id="collection-link">Collection</div></Link>
          </div>
          <div className="search-bar-container">
            <input className="search-bar" placeholder="Search"></input>
          </div>
          <div className="right-nav">
            <Link to="/upload"><div className="nav-link" id="upload-link">Upload</div></Link>
            <div className="user-nav">{currentUser.display_name}</div>
            {element}
          </div>
        </div>
      </header>
    )
  }
}

export default NavBar;
