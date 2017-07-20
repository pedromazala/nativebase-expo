/**
 * Created by Pedro Mazala on 20/07/2017.
 */
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import allReducers from './Reducers/index.js';
import Counter from './Counter/index.js';

const store = createStore(allReducers);

export default class extends Component {
  render() {
    return (
      <Provider store={store}>
        <Counter />
      </Provider>
    );
  }
}