import React, { Component } from 'react'

import './RoverInfo.css'

class RoverInfo extends Component {
  state = {
    rover: {}
  }

  componentWillMount = () => {
    this.fetchRoverData(this.props)
  }

  componentWillReceiveProps = (newProps) => {
    const locationChanged = newProps.location !== this.props.location
    if (locationChanged) {
      this.fetchRoverData(newProps)
    }
  }

  fetchRoverData(props) {
    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${props.match.params.rover}/photos?earth_date=2015-6-3&camera=fhaz&api_key=DEMO_KEY`)
      .then(response => response.json())
      .then(data => {
        let rover = {}
        if (data) {
          rover = {
            name: data.photos[0].rover.name,
            imageUrl: data.photos[0].img_src,
            earthDate: data.photos[0].earth_date,
          }
        } else {
          rover = {
            name: props.match.params.rover,
            imageUrl: null,
            earthDate: 'No images for that rover on that date.'
          }
        }
        this.setState({ rover })
      })
  }

  render() {
    const { name, imageUrl, earthDate } = this.state.rover
    return (
      <div className="RoverInfo">
        <h2>Mars Rover Name: {name}</h2>
        <h3>{earthDate}</h3>
        {
          imageUrl &&
            <img src={imageUrl} alt="surface of Mars" />
        }
      </div>
    )
  }
}

export default RoverInfo