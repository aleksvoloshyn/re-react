import React, { Component } from 'react'
import s from '../../styles/Button.module.css'

class Counter extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     value: 0,
  //     step: 15,
  //   }
  // }
  state = {
    value: 0,
    step: 15,
    visible: true,
  }

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

  nullValue = () => {
    this.setState({ value: 0 })
  }

  setVisible = () => {
    if (this.state.visible) {
      this.setState({ visible: false })
      console.log(this.state.visible)
    } else {
      this.setState({ visible: true })
      console.log(this.state.visible)
    }
  }

  render() {
    return (
      <div>
        <span>{this.state.value}</span>
        <button className={s.Button} onClick={this.increase}>
          + {this.state.step}
        </button>
        <button className={s.Button} onClick={this.nullValue}>
          0
        </button>
        <button className={s.Button} onClick={this.decrease}>
          - {this.state.step}
        </button>
        <button onClick={this.setVisible}>DISAPEAR</button>
        {this.state.visible && <span>ИСЧЕЗАЙКА</span>}
      </div>
    )
  }
}

export { Counter }
