import React, { Component } from 'react'
import './App.css'

import { Home, Main, Profiles } from './components'
import { Link, Route } from './router'

class App extends Component {
  render () {
    return (
      <div>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/main'>Main</Link></li>
          <li><Link to='/profile'>Profile</Link></li>
        </ul>

        <hr />

        <Route exact path='/' component={Home} />
        <Route path='/main' component={Main} />
        <Route path='/profile' component={Profiles} />
      </div>
    )
  }
}

export default App
