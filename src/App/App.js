import React, { Component } from 'react'
import './App.css'
import Home from '../Home/Home';
import Dashboard from '../Dashboard/Dashboard'
import {
  HashRouter as Router,
  Route,
  Redirect
} from 'react-router-dom'

class App extends Component {

  render () {
    return (
      <Router>
        <div className='app'>
          <Route exact path='/' component={Home} />
          <Route path='/dashboard' render={() => {
                 if (!window.localStorage.getItem('userId')) {
                    return <Redirect to='/' />
                 } else {
                   return <Dashboard />
                 }
                }} />
        </div>
      </Router>
    )
  }
}

export default App
