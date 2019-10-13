import React, { Component } from 'react'
import { Provider } from 'react-redux';
import Contacts from './Components/Contacts';
import {BrowserRouter as Router,Route} from 'react-router-dom'

import store from './store'
import Addcontact from './Components/Addcontact';
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <h1>Contacts:</h1>
        <Router>
          <Route exact path='/'component={Contacts}/>
          <Route exact path='/Add'component={Addcontact}/>
      </Router>
      </Provider>
    )
  }
}
