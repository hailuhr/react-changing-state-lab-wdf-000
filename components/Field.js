const React = require('react');

class Field extends React.Component {
  render () {
    const { player, onClick } = this.props;

    const disabled = (player === "X" || player === "O") ? true : false;


    return (
      <button className="field" disabled={disabled} onClick={onClick}>{player}
      </button>
    );
  }
}

module.exports = Field;
