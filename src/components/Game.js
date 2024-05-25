import React, { useState } from 'react';
import Board from './Board';
import  "../GameStyle.css";
import { calWinner } from '../helpers';
const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calWinner(board)
    const handleClick = (index) => {
        const boardCopy = [...board];
        if(winner || boardCopy[index]) return;
        boardCopy[index] = xIsNext ? 'X' : 'O';
        setBoard(boardCopy);
        setXIsNext(!xIsNext);
    };
    const handleResetGame = ()=>{
        setBoard(Array(9).fill(null));
        setXIsNext(true);
    }
    const renderNotification = ()=> {
        if(winner){
            return (
                <div className='notification'>
                    {xIsNext ? '0 WIN' : 'X WIN'}
                    <button onClick={handleResetGame} class="btn-restart">RESET GAME</button>
                </div>
            )
        }
     
    }
    return (
        <div>
            <Board cells={board} onClick={handleClick}></Board>
            {renderNotification()}
        </div>
    );
};

export default Game;