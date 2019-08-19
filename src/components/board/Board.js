import React, { Fragment, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';

//Import other components
import Player from '../Player';
import Mob from '../Mob';
import EndStats from '../EndStats';
import ManualMovementPanel from '../ManualMovementPanel';

//Import actions
import { changeBoardMatrix } from '../../redux/actions/gameActions';

//Import configs
import gameConfig from '../../assets/configs/gameConfig.json';

//Import images
import bgPicPath from '../../assets/images/concreteFloor.jpg';
import charMonster1 from '../../assets/images/charMonster1.png'; //TODO: replace it via cashiers sprites
import charMonster2 from '../../assets/images/charMonster1.png';

//Import scripts
import { generateBreads, breadInterval } from '../../assets/scripts/breads';
import { generateBarriers } from '../../assets/scripts/barriers';
import { setStartPosition } from '../../assets/scripts/board';
import { dijkstra } from '../../assets/scripts/dijkstra';
import { createBoardGrahp } from '../../assets/scripts/boardGraph';


let firstIteration = true;

export const Board = () => {
    const dispatch = useDispatch();
    const boardPosition = useSelector(state => state.game.board.position);
    const isRunGame = useSelector(state => state.game.isRunGame);
    const endStats = useSelector(state => state.game.endStats);
    const playerPosition = useSelector(state => state.game.player.position);

    const body = document.body;
    let boardGraph;

    const boardStyles = {
        width: `${gameConfig.boardSize.x*gameConfig.boardFieldSize}px`,
        height: `${gameConfig.boardSize.y*gameConfig.boardFieldSize}px`,
        top: `${boardPosition.top}px`,
        left: `${boardPosition.left}px`,
        backgroundImage: `url(${bgPicPath})`
    }

    useEffect(() => {
        if (!isRunGame) return;
        
        boardGraph = createBoardGrahp();
        const xd = dijkstra(boardGraph, boardGraph.get(0));
        console.log(xd);    
    }, [playerPosition])

    useEffect(()=> { //create boardMatrix
        if (isRunGame) generateBoardMatrix();
        if (firstIteration) setStartPosition(true, true);   
        if (!isRunGame) clearInterval(breadInterval);

        if (!isRunGame) firstIteration = true;
    });

    
    const generateBoardMatrix = () => {
        if (!firstIteration) return;

        firstIteration = false;

        const boardMatrix = [];

        for (let y=0; y<gameConfig.boardSize.y; y++) {
            const yAxis = Array(gameConfig.boardSize.x).fill(0);

            boardMatrix.push(yAxis);
        }

        dispatch(changeBoardMatrix(boardMatrix)) //0
        generateBarriers(); //1
        generateBreads(true); //2
    }


    return (
        <Fragment>
            { 
                endStats ? ReactDOM.createPortal(<EndStats />, body) : null
            }
            <div id="boardWindow" className="boardWindow">
                <ManualMovementPanel/>
                <div id="board" className="board" style={boardStyles}>
                    { isRunGame ? <Player /> : null }
                    { isRunGame ? <Mob sprite={charMonster1} position={{x: 0, y: 0}} /> : null }
                </div>
            </div>
        </Fragment>
    )
}


export default Board;