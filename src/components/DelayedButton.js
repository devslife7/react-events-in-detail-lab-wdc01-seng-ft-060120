import React, { Component } from 'react'

class DelayedButton extends Component {

  handelClick = (event) => {
    event.persist()
    setTimeout(() => {
      this.props.onDelayedClick(event)
    }, this.props.delay);
  }

  render() {
    return <button onClick={this.handelClick} > DelayedButton </button>
  }
}

export default DelayedButton