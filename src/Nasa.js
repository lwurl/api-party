import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'

import './Nasa.css'
import RoverInfo from './RoverInfo'

class Nasa extends Component {
  render() {
    return (
      <div className="Nasa">
        <img
          src="https://www.nasa.gov/sites/default/files/images/nasaLogo-570x450.png"
          alt="NASA"
          className="logo"
        />

        <h2>Select a Mars rover</h2>
        <ul className="navLinks">
          <li>
            <NavLink to="/nasa/curiosity">Curiosity</NavLink>
          </li>
          <li>
            <NavLink to="/nasa/opportunity">Opportunity</NavLink>
          </li>
          <li>
            <NavLink to="/nasa/spirit">Spirit</NavLink>
          </li>
        </ul>

        <Route path="/nasa/:rover" component={RoverInfo} />
        <Route exact path="/nasa" render={() => <h2>No rover selected.</h2>} />
      </div>
    )
  }
}

export default Nasa