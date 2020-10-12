/*
 * @Author: xiaohuolong
 * @Date: 2020-10-12 10:57:28
 * @LastEditors: xiaohuolong
 * @LastEditTime: 2020-10-12 15:50:25
 * @FilePath: /react-xy/demo01/src/index.js
 */
import React from 'react'
import ReactDOM from 'react-dom';
import './index.css';

// class Square extends React.Component {
//     render() {
//         return (
//             <button className="square" onClick={() => {this.props.onClick()}}>
//                 {this.props.value}
//             </button>
//         );
//     }
// }
function Square(props) {
    return (
        <button className={`square ${props.highlight ? 'hightLight' : ''}`} onClick={props.onClick}>
            {props.value}
        </button>
    );
}

class Board extends React.Component {
    renderSquare(i) {
        return <Square key={i}
            highlight={this.props.winner[i]}
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)}
        />
    }
    render() {
        const list = []
        const squares = this.props.squares
        let res = []
        squares.map((item, index) => {
            if(index > 0 && index % 3 === 0){
                list.push(res)
                res = []
            }
            res.push(item)
        })
        if(res.length) list.push(res)
        return (
        <div>
            {list.map((item, index) => {
                return (
                    <div key={index} className="board-row">
                        {item.map((s, j) => this.renderSquare(j+index*3))}
                    </div>
                )
            })}
        </div>
        );
    }
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            const obj = {}
            obj[a] = true
            obj[b] = true
            obj[c] = true
            obj.winner = squares[a]
            return obj;
        }
    }
    return null;
}

class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            history: [
                {
                    squares: Array(9).fill(null),
                    step: {
                        x: 0,
                        y: 0
                    }
                }
            ],
            stepNumber: 0,
            xIsNext: true,
            sort: false
        };
    }
    handleClick(i){
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O'
        const step = {
            x: 0,
            y: 0,
            value: squares[i]
        }
        step.y = Math.floor(i / 3)
        step.x = i - step.y * 3
        this.setState({
            history: history.concat([{
                squares,
                step
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
        });
    }
    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        });
    }
    render() {
        const history = this.state.history;
        const stepNumber = this.state.stepNumber
        const current = history[stepNumber];
        let winner = calculateWinner(current.squares)
        let moves = history.map((s, move) => {
            const desc = move ?
                `Go to move #${move}: (${s.step.x}, ${s.step.y}) ${s.step.value}` :
                'Go to game start';
            return (
                <li key={move}>
                    <button className={stepNumber === move ? 'bold' : ''} onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });
        const sort = this.state.sort
        if(sort) moves = moves.reverse()
        let status
        if(winner){
            status = `winner is: ${winner.winner}`;
        }else{
            let now = this.state.xIsNext ? 'X' : 'O'
            if(stepNumber == 9){
                status = `平局`;
            }else{
                status = `Next player: ${now}`;
            }
            winner = {}
        }
        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        winner={winner}
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                <div>{status}</div>
                <button onClick={() => this.setState({sort: !sort})}>{sort ? 'down' : 'up'}</button>
                <button onClick={() => this.jumpTo(0)}>reset</button>
                <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
