import React, {Component} from 'react'

class Square extends Component {
  render() {
    return (
      <button className= "square">
        {this.state.value}
      </button>
    )
  }
}

export default Square
