import './App.css';
import React, { useState } from 'react';

const TURNS = {
    X: 'x',
    O: 'o'
}

const Square = ({ children, isSelected, updateBoard, index }) => {
    const className = `square ${isSelected ? 'is-selected' : ''}`
    
    const handleClick = () => {
        updateBoard(index)
    }
    
    return (
        <div onClick={handleClick} className={className}>
            {children}
        </div>
    )
}

const WIN_COMBINATIOS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3 ,6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

export const App2 = () => {
    const [board, setBoard] = useState(
        Array(9).fill(null)
    )
    const [turn, setTurn] = useState(TURNS.X)
    
    const [winner, setWinner] = useState(null)      // null no hay ganador, false empate

    const updateBoard = (index) => {
        if (board[index]) {    // Si la casilla ya esta ocupada, no hacer nada
            return
        }

        const newBoard = [...board]         // Siempre crear un nuevo array para las props, las props en react son inmutables
        newBoard[index] = turn
        setBoard(newBoard)  // Actualizar tablero

        const nextTurn = turn == TURNS.X ? TURNS.O : TURNS.X
        setTurn(nextTurn);  // Pasar de turno
    }

    return (
        <main className='board'>
            <h1>Tic Tac Toe</h1>
            <section className='game'>
                {
                    board.map((_, index) => {
                        return (
                            <Square
                                key = {index}
                                index = {index}
                                updateBoard = {updateBoard}
                            >
                                {board[index]}
                            </Square>
                        )  
                    })
                }
            </section>

            <section className="turn">
                <Square isSelected={turn == TURNS.X}>
                    {TURNS.X}
                </Square>
                <Square isSelected={turn == TURNS.O}>
                    {TURNS.O}
                </Square>
            </section>
        </main>
    );         
}
