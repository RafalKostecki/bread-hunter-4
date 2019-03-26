import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//Import other components
import BoardField from './BoardField';
import Player from '../Player';
import Bread from '../Bread';

//Import actions
import { setBoardPos, changeBoardMatrix } from '../../redux/actions/gameActions';

//Import configs
import gameConfig from '../../assets/configs/gameConfig.json';

//Import scripts
import { generateBreads, breadInterval } from '../../assets/scripts/breads';



let boardSwitch = true;
let firstIteration = true;

export const Board = ({ boardPosition , isRunGame, playerPosition, setBoardPos, changeBoardMatrix }) => {

    const boardStyles = {
        width: `${gameConfig.boardSize.x*gameConfig.boardFieldSize}px`,
        height: `${gameConfig.boardSize.y*gameConfig.boardFieldSize}px`,
        top: `${boardPosition.top}px`,
        left: `${boardPosition.left}px`
    }

    useEffect(()=> { //create boardMatrix
        if (isRunGame) generateBoardMatrix();

        const top = -Math.floor(playerPosition.y/2)*gameConfig.boardFieldSize;
        const left = -Math.floor(playerPosition.x/2)*gameConfig.boardFieldSize;
        if (boardSwitch) setBoardPos({top: top, left: left});
        boardSwitch = false;

        if (!isRunGame) clearInterval(breadInterval);
    });

    
    const generateBoardMatrix = () => {
        if (!firstIteration) return;

        firstIteration = false;

        const boardMatrix = [];

        for (let y=0; y<gameConfig.boardSize.y; y++) {
            const yAxis = [];
            for (let x=0; x<gameConfig.boardSize.y; x++) {
                yAxis.push(0);
            }
            boardMatrix.push(yAxis);
        }

        changeBoardMatrix(boardMatrix)
        generateBreads();
    }

    const boardFields = [...Array(gameConfig.boardSize.x*gameConfig.boardSize.y)].map((element, id) => {
        const row = Math.floor(id/gameConfig.boardSize.x);
        const column = id - (row*gameConfig.boardSize.x);

        return <BoardField 
            key={id}
            id={`${column}.${row}`}
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
    isRunGame: PropTypes.bool.isRequired,
    playerPosition: PropTypes.object.isRequired,
    setBoardPos: PropTypes.function,
    createBoardMatrix: PropTypes.function
}

const mapStateToProps = state => {
    return {
        boardPosition: state.game.board.position,
        isRunGame: state.game.isRunGame,
        playerPosition: state.game.player.position
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setBoardPos: position => { dispatch(setBoardPos(position)) },
        changeBoardMatrix: matrix => { dispatch(changeBoardMatrix(matrix)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);