import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//Import other components
import BoardField from './BoardField';
import Player from '../Player';

//Import actions
import { setBoardPos, changeBoardMatrix } from '../../redux/actions/gameActions';

//Import configs
import gameConfig from '../../assets/configs/gameConfig.json';

//Import images
import bgPicPath from '../../assets/images/concreteFloor.jpg';

//Import scripts
import { generateBreads, breadInterval } from '../../assets/scripts/breads';
import { generateBarriers } from '../../assets/scripts/barriers';


let boardSwitch = true;
let firstIteration = true;

export const Board = ({ boardPosition , isRunGame, playerPosition, setBoardPos, changeBoardMatrix }) => {

    const boardStyles = {
        width: `${gameConfig.boardSize.x*gameConfig.boardFieldSize}px`,
        height: `${gameConfig.boardSize.y*gameConfig.boardFieldSize}px`,
        top: `${boardPosition.top}px`,
        left: `${boardPosition.left}px`,
        backgroundImage: `url(${bgPicPath})`
    }

    useEffect(()=> { //create boardMatrix
        if (isRunGame) generateBoardMatrix();

        setStartPosition();
        
        

        if (!isRunGame) clearInterval(breadInterval);
    });

    const setStartPosition = () => {
        if (!boardSwitch) return;

        const boardWindow = document.getElementById("boardWindow");
        const boardWindowStyles = window.getComputedStyle(boardWindow);
        const boardWindowWidth = parseInt(boardWindowStyles.getPropertyValue('width'));
        const boardWindowHeight = parseInt(boardWindowStyles.getPropertyValue('height'));
        const boardWidth = gameConfig.boardSize.x*gameConfig.boardFieldSize;
        const boardHeight = gameConfig.boardSize.y*gameConfig.boardFieldSize;
        const top = (boardWindowHeight - boardHeight) / 2;
        const left = (boardWindowWidth - boardWidth) / 2;

        setBoardPos({top: top, left: left});
        boardSwitch = false;
    }

    
    const generateBoardMatrix = () => {
        if (!firstIteration) return;

        firstIteration = false;

        const boardMatrix = [];

        for (let y=0; y<gameConfig.boardSize.y; y++) {
            const yAxis = Array(gameConfig.boardSize.x).fill(0);

            boardMatrix.push(yAxis);
        }

        changeBoardMatrix(boardMatrix); //0
        generateBarriers(); //1
        generateBreads(); //2
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
        <div id="boardWindow" className="boardWindow">
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
    setBoardPos: PropTypes.func,
    createBoardMatrix: PropTypes.func
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