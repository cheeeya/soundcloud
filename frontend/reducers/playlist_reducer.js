import { combineReducers } from 'redux';
import { merge } from 'lodash';
import { RECEIVE_ALL_SONGS } from '../actions/song_actions';
import songReducer from './song_reducer';

const _default = {
  allSongs: {}
}

const playlistReducer = (state = _default, action) => {
  Object.freeze(state);
  let newState = {};
  switch (action.type) {
    case RECEIVE_ALL_SONGS:
      newState = merge({}, state, { allSongs: songReducer(state, action) });
      return newState;
    default:
      return state;
  }
}


export default playlistReducer;