import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Squar(props) {
  return (
    <button className="squar" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  renderSquar(i) {
    return (
      <Squar
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquar(1)}
          {this.renderSquare(2)}
          {this.renderSquar(3)}
          {this.renderSquare(4)}
          {this.renderSquar(5)}
          {this.renderSquare(6)}
          {this.renderSquar(7)}
          {this.renderSquare(8)}
          {this.renderSquar(9)}
        </div>
        <div className="board-row">
          {this.renderSquar(10)}
          {this.renderSquare(11)}
          {this.renderSquar(12)}
          {this.renderSquare(13)}
          {this.renderSquar(14)}
          {this.renderSquare(15)}
          {this.renderSquar(16)}
          {this.renderSquare(17)}
          {this.renderSquar(18)}
          {this.renderSquare(19)}
        </div>
        <div className="board-row">
          {this.renderSquare(20)}
          {this.renderSquar(21)}
          {this.renderSquare(22)}
          {this.renderSquar(23)}
          {this.renderSquare(24)}
          {this.renderSquar(25)}
          {this.renderSquare(26)}
          {this.renderSquar(27)}
          {this.renderSquare(28)}
          {this.renderSquar(29)}
        </div>
        <div className="board-row">
          {this.renderSquar(30)}
          {this.renderSquare(31)}
          {this.renderSquar(32)}
          {this.renderSquare(33)}
          {this.renderSquar(34)}
          {this.renderSquare(35)}
          {this.renderSquar(36)}
          {this.renderSquare(37)}
          {this.renderSquar(38)}
          {this.renderSquare(39)}
        </div>
        <div className="board-row">
          {this.renderSquare(40)}
          {this.renderSquar(41)}
          {this.renderSquare(42)}
          {this.renderSquar(43)}
          {this.renderSquare(44)}
          {this.renderSquar(45)}
          {this.renderSquare(46)}
          {this.renderSquar(47)}
          {this.renderSquare(48)}
          {this.renderSquar(49)}
        </div>
        <div className="board-row">
          {this.renderSquar(50)}
          {this.renderSquare(51)}
          {this.renderSquar(52)}
          {this.renderSquare(53)}
          {this.renderSquar(54)}
          {this.renderSquare(55)}
          {this.renderSquar(56)}
          {this.renderSquare(57)}
          {this.renderSquar(58)}
          {this.renderSquare(59)}
        </div>
        <div className="board-row">
          {this.renderSquare(60)}
          {this.renderSquar(61)}
          {this.renderSquare(62)}
          {this.renderSquar(63)}
          {this.renderSquare(64)}
          {this.renderSquar(65)}
          {this.renderSquare(66)}
          {this.renderSquar(67)}
          {this.renderSquare(68)}
          {this.renderSquar(69)}
        </div>
        <div className="board-row">
          {this.renderSquar(70)}
          {this.renderSquare(71)}
          {this.renderSquar(72)}
          {this.renderSquare(73)}
          {this.renderSquar(74)}
          {this.renderSquare(75)}
          {this.renderSquar(76)}
          {this.renderSquare(77)}
          {this.renderSquar(78)}
          {this.renderSquare(79)}
        </div>
        <div className="board-row">
          {this.renderSquare(80)}
          {this.renderSquar(81)}
          {this.renderSquare(82)}
          {this.renderSquar(83)}
          {this.renderSquare(84)}
          {this.renderSquar(85)}
          {this.renderSquare(86)}
          {this.renderSquar(87)}
          {this.renderSquare(88)}
          {this.renderSquar(89)}
        </div>
        <div className="board-row">
          {this.renderSquar(90)}
          {this.renderSquare(91)}
          {this.renderSquar(92)}
          {this.renderSquare(93)}
          {this.renderSquar(94)}
          {this.renderSquare(95)}
          {this.renderSquar(96)}
          {this.renderSquare(97)}
          {this.renderSquar(98)}
          {this.renderSquare(99)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(100).fill(null)
        }
      ],
      stepNumber: 0,
      xIsNext: true
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          squares: squares
        }
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ? "Go to move #" + move : "Go to game start";
      return (
        <li key={move}>
          <button color="#fff6c2" onClick={() => this.jumpTo(move)}>
            {desc}
          </button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares} onClick={i => this.handleClick(i)} />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));

function calculateWinner(squares) {
  const directions = [
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1],
    [-1, 0],
    [-1, 1]
  ];
  for (let j = 0; j <= 99; j++) {
    if (squares[j]) {
      for (let i = 0; i < directions.length; i++) {
        const [a, b] = directions[i];
        if (squares[j] === squares[j + a + 10 * b]) {
          var num = 2;
          var temp = j + a + 10 * b;
          while (linking([a, b, temp, squares]) && num !== 5) {
            temp = temp + a + 10 * b;
            num += 1;
          }
          if (num === 5) {
            return squares[j];
          }
        }
      }
    }
  }
  return null;
}

function linking([a, b, temp, squares]) {
  if (squares[temp] === squares[temp + a + 10 * b]) {
    return true;
  } else {
    return false;
  }
}
