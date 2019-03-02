import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//Import other components
import BoardField from './BoardField';
import Player from '../Player';


const Board = ({ boardPosition , isRunGame }) => {
    const boardConfig = {
        x: 20,
        y: 15,
        fieldSize: 50
    }

    const boardStyles = {
        width: `${boardConfig.x*boardConfig.fieldSize}px`,
        height: `${boardConfig.y*boardConfig.fieldSize}px`,
        top: `${boardPosition.top}`,
        left: `${boardPosition.left}`
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

    });

    const boardFields = [...Array(boardConfig.x*boardConfig.y)].map((element, id) => {
        const row = Math.floor(id/boardConfig.x);
        const column = id - (row*boardConfig.x);

        return <BoardField 
            key={id}
            id={`${row}.${column}`}
        />
    })


    return (
        <div className="boardWindow">
            <div className="board" style={boardStyles}>
                { isRunGame ? <Player /> : null }
                {boardFields}
            </div>
        </div>
    )
}

Board.propTypes = {
    boardPosition: PropTypes.object.isRequired,
    isRunGame: PropTypes.bool.isRequired
}

const mapStateToProps = state => {
    return {
        boardPosition: state.game.board.position,
        isRunGame: state.game.isRunGame
    }
}

export default connect(mapStateToProps)(Board);