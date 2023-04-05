import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncreament = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="counter-heading">
          The Button has been clicked
          <span className="span-heading counter-heading"> {count} </span>times
        </h1>
        <p className="counter-description">
          Click the button to increase the count!
        </p>
        <button
          type="button"
          className="counter-button"
          onClick={this.onIncreament}
        >
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
