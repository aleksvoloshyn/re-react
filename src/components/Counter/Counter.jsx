import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Counter extends Component {
  state = {
    value: 0,
    step: 11,
  }

  /* ... */

  increase = () => {
    this.setState((prevState) => {
      return { value: prevState.value + this.state.step }
    })
  }

  decrease = () => {
    this.setState((prevState) => {
      return { value: prevState.value - this.state.step }
    })
  }

  render() {
    return (
      <div>
        <span>{this.state.value}</span>
        <button onClick={this.increase}>+</button>
        <button onClick={this.decrease}>-</button>
      </div>
    )
  }
}

export { Counter }
