import React, { useEffect } from 'react';

//Import other components
import BoardField from './BoardField';

const Board = () => {
    const boardConfig = {
        x: 20,
        y: 15,
        fieldSize: 50
    }

    const boardStyles = {
        width: `${boardConfig.x*boardConfig.fieldSize}px`,
        height: `${boardConfig.y*boardConfig.fieldSize}px`,
        top: "0",
        left: "0"
    }

    const boardMatrix = [];

    useEffect(()=> { //create boardMatrix
        for (let y=0; y<boardConfig.y; y++) {
            const yAxis = [];
            for (let x=0; x<boardConfig.x; x++) {
                yAxis.push(0)
            }
            boardMatrix.push(yAxis);
        }

        console.log(boardMatrix);
    })


    return (
        <div className="boardWindow">
            <div className="board" style={boardStyles}>
                xdd
            </div>
        </div>
    )
}

export default Board;