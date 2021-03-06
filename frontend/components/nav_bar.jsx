import React from 'react';
import { Link } from 'react-router-dom';
import SessionFormModal from './session_form_modal';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.checkLogin = this.checkLogin.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    if (window.songHowl) {
      this.props.pause();
    }
    this.props.logout();
  }

  checkLogin(e) {
    e.preventDefault();
    const { currentUser, history } = this.props;
    if (currentUser) {
      history.push("/upload");
    } else {
      window.triggerLogin();
    }
  }

  render () {
    const { currentUser, receiveFormType, route } = this.props;
    let element = (
          <SessionFormModal receiveFormType={receiveFormType} loc="nav-bar" />
        );
    let activeHome = "", activeUpload ="", activeProfile = "";

    if (route === "/stream" || route === "/discover") {
      activeHome = "active-tab";
    } else if (route === "/upload") {
      activeUpload = "active-tab";
    }
    if (currentUser) {
      if (route === `/${currentUser.profile_url}`) {
        activeProfile = "active-tab";
      }
      element = (
        <div className="user-nav-wrapper">
          <Link to={`/${currentUser.profile_url}`}>
            <div className={`user-nav ${activeProfile}`}>
              <div
                className="user-nav-avatar"
                style={{ backgroundImage: `url(${currentUser.profile_picture_url})`}}
              />
              <span className="user-nav-name">{currentUser.display_name}</span>
            </div>
          </Link>
          <div className="session-button-div">
            <button
              id='logout-btn'
              className="session-button"
              onClick={this.handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      )
    }
    return (
      <header>
        <div id="nav-wrap">
          <div id='nav-bar'>
            <div className="nav-logo">
              <Link to="/stream" className="root-link">
                <img
                  className="logo-blue"
                  src="https://res.cloudinary.com/elitebeats/image/upload/v1520850261/eb_icon_bluewhite_calphx.png"
                  />
              </Link>
            </div>
            <div className="left-nav">
              <Link to="/stream">
                <div id="home-link" className={`nav-link ${activeHome}`}>
                  Home
                </div>
              </Link>
              <Link to="/stream">
                <div
                  id="collection-link"
                  className="nav-link"
                  >
                  Collection
                </div>
              </Link>
            </div>
            <div className="search-bar-wrapper">
              <input className="search-bar" placeholder="Search" />
              <button className="nav-bar-search-btn" />
            </div>
            <div className="right-nav">
              <Link to="/upload" onClick={this.checkLogin}>
                <div id="upload-link" className={`nav-link ${activeUpload}`}>
                  Upload
                </div>
              </Link>
              {element}
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default NavBar;
