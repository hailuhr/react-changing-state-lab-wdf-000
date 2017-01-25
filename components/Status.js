const React = require('react');

class Status extends React.Component {
  render () {
    const { winner } = this.props;

    var message = ""

    if (winner === "X") {
      message = "X wins"
    } else if (winner === "O") {
      message = "O wins"
    } else {
      message = "Tie"
    }

    return (
      <div className="status" >{message}
      </div>
    );
  }
}

module.exports = Status;
