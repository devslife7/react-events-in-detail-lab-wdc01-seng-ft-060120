import React, { Component } from 'react'

class CoordinatesButton extends Component {
  handleClick = (event) => {
    event.persist()
    const coordinatesArray = [event.clientX, event.clientY]
    this.props.onReceiveCoordinates(coordinatesArray)
  }

  render() {
    return <button onClick={this.handleClick} > CoordinatesButton </button>
  }
}

export default CoordinatesButton