import React from 'react';

//Import other components
import BoardField from './BoardField';

const Board = () => {
    const boardStyles = {
        width: "1200px",
        height: "850px",
        top: "0",
        left: "0"
    }

    const boardFieldSize = 50;
    const boardWidth = parseInt(boardStyles.width);
    const boardHeight = parseInt(boardStyles.height);
    console.log(boardWidth, boardHeight)

    const boardFieldQuantity = (boardWidth/boardFieldSize) * (boardHeight/boardFieldSize) + 6;

    const boardFields = [...Array(boardFieldQuantity)].map((element, id) => {
        return <BoardField 
            key={id}
            id={id}
        />
    })

    return (
        <div className="boardWindow">
            <div className="board" style={boardStyles}>
                {boardFields}
            </div>
        </div>
    )
}

export default Board;