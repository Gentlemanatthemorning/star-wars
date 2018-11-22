import React from "react";

const ClockTime = props => <h3>{props.time}</h3>;

const ClockDate = props => <h3>{props.date}</h3>;

class Clock extends React.Component {
  state = {
    date: new Date()
  };

  render() {
    return (
      <div>
        <ClockTime time={this.state.date.toLocaleTimeString()} />
        <ClockDate date={this.state.date.toLocaleDateString()} />
      </div>
    );
  }

  componentDidMount() {
    this.x = setInterval(() => {
      this.setState({
        date: new Date()
      });
    }, 1000);
  }
}

export default Clock;
