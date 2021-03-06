import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import { login } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;

  if(window.currentUser) {
    const preloadedState = {
      session: {
        currentUser: window.currentUser,
        formType: "",
        updateRequired: false
      }, player: {
        currentPlaylist: "allSongs",
        currentSong: null
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store= configureStore()
  }

  window.getState = store.getState;

  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, rootEl);
});
