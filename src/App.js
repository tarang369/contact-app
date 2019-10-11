import React, { Component } from 'react'
import {Provider} from 'react-redux';
import Contacts from './Components/Contacts'

import store from './store'
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <h1>hello</h1>
        <Contacts/>
      </Provider>
    )
  }
}
