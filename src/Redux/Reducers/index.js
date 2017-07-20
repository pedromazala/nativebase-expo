/**
 * Created by Pedro Mazala on 20/07/2017.
 */
import {combineReducers} from 'redux';

import countReducer from '../Counter/reducer.js';

const allReducers= combineReducers({
  count: countReducer,
});

export default allReducers;