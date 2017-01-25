const React = require('react');
const Field = require('./Field');

class Board extends React.Component {
  render () {
    const { board, onClick } = this.props;
    const fields = board.map((player, i) =>

      <Field key={i} player={player} onClick={onClick.bind(null, i)} />
        )
    return (
      <div className="board">
        { fields }
      </div>
    );
  }
}

module.exports = Board;
