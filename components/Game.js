const React = require('react');
const Board = require('./Board');
const Status = require('./Status');
const solutions = require('./solutions');

class Game extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      board: [null, null, null, null, null, null, null, null, null],
      turn: "X"
    };

    this.handleReset = this.handleReset.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleReset (ev) {
     ev.preventDefault();
     this.setState({
       board: [null, null, null, null, null, null, null, null, null],
       turn: "X"
     });
   }

   handleClick (i, ev) {
     ev.preventDefault();
     const turn = this.state.turn === 'X' ? 'O' : 'X';
     this.setState({
       board: this.state.board.fill(this.state.turn, i, i+1),
       turn: turn
     });
   }

   getWinner () {
         for(var x = 0; x < solutions.length; x++){
            if(`${this.state.board[solutions[x][0]]}, ${this.state.board[solutions[x][1]]}, ${this.state.board[solutions[x][2]]}` == "X, X, X"){
              return "X"
            }else if(`${this.state.board[solutions[x][0]]}, ${this.state.board[solutions[x][1]]}, ${this.state.board[solutions[x][2]]}` == "O, O, O"){
              return "O"
            }
          }
   }

   isComplete () {
     if (this.getWinner() || !this.state.board.includes(null)) {
       return true
     }
   }


  render () {
    return (
      <div className="game">
      <Board board={this.state.board} onClick={this.handleClick} />
      { this.isComplete() ? <Status winner={this.getWinner()} /> : null }
      <button className='game__reset' onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

module.exports = Game;
