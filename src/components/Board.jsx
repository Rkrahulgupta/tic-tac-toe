import React, { useState } from 'react'
import Boxs from './Boxs'

const Board = () => {

    const [num, setNum] = useState(Array(9).fill(null));
    const [isXTurn, setIsXTurn] = useState(true);

    const checkWinner = () => {
        const isWinner = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let logic of isWinner) {
            const [a, b, c] = logic;
            if (num[a] != null && num[a] === num[b] && num[a] === num[c])
                return num[a]
        }
        return false;
    }

    const clickHandle = (index) => {
        const copy = [...num];
        copy[index] = isXTurn ? "X" : "O";
        setNum(copy)
        setIsXTurn(!isXTurn)
    }

    const winner = checkWinner();

    const playAgain = () => {
        window.location.reload();
    }

    return (

        winner ? (
            <>
                <div className='win'>{winner} is won the game</div>
                <button onClick={playAgain}> <span class="button_top">Play Again
                </span> </button>
            </>

        ) : (
            <>

                <main>
                    <h1 className='h1'>Tic-Tac-Toe</h1>
                    <div className="container">

                        <div className="game">
                            <Boxs onClick={() => clickHandle(0)} value={num[0]} />
                            <Boxs onClick={() => clickHandle(1)} value={num[1]} />
                            <Boxs onClick={() => clickHandle(2)} value={num[2]} />
                        </div>
                        <div className="game">
                            <Boxs onClick={() => clickHandle(3)} value={num[3]} />
                            <Boxs onClick={() => clickHandle(4)} value={num[4]} />
                            <Boxs onClick={() => clickHandle(5)} value={num[5]} />
                        </div>
                        <div className="game">
                            <Boxs onClick={() => clickHandle(6)} value={num[6]} />
                            <Boxs onClick={() => clickHandle(7)} value={num[7]} />
                            <Boxs onClick={() => clickHandle(8)} value={num[8]} />
                        </div>
                    </div>
                    {/* <button id="reset">Reset Game</button> */}
                </main>

            </>
        )
    )
}

export default Board