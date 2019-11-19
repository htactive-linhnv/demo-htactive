import React from "react"

class ProgressBar extends React.Component {
  constructor() {
    super();
    this.state = {
      progressTime: 0,
    }
  }
  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({
        progressTime: (this.state.progressTime + 0.1),
      })
    }, 10)
  }
  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  render() {
    let { progressTime } = this.state
    return (
      <div
        className="tp-bannertimer tp-bottom "
        style={{ width: `${progressTime}%` }}
      ></div>
    )
  }
}
export default ProgressBar