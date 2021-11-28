import { combineReducers } from 'redux';
import birds from './birds';

const birdApp = combineReducers({
  birds
});

export default birdApp;