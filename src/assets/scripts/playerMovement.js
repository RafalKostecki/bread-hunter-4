import { store } from '../../Game';

//Import actions
import { setPlayerPos, setPlayerDirection, setBoardPos } from '../../redux/actions/gameActions';

//Import configs
import gameConfig from '../configs/gameConfig';

let currKeyDown = undefined;
let wasPressed = false;
let firstIteration = false;

let stepInterval = undefined;

export const keyDownHandler = key => {
    const playerStepTime = gameConfig.playerStepTime;

    if (!wasPressed) currKeyDown = key.keyCode;
    wasPressed = true;

    if (!firstIteration) {
        changePlayerPosition(key.keyCode);
        stepInterval = setInterval(() => {
            if (!wasPressed) return;

            changePlayerPosition(key.keyCode);
        }, playerStepTime);
    }

    firstIteration = true;
}

export const keyUpHandler = key => {
    if (!currKeyDown === key.keyCode) return;
    
    wasPressed = false;
    firstIteration = false;
    clearInterval(stepInterval);
}


const changePlayerPosition = keyCode => {
    if(checkCollisions(keyCode)) return;

    let coordinateChange = {x: 0, y: 0};
    let boardMove = {top: 0, left: 0};
    let direction = 'down';

    switch(keyCode) {
        case 87: //up
            coordinateChange = {x: 0, y: -1};
            boardMove = {top: 50, left: 0};
            direction = 'up';
        break;
        case 68: //right
            coordinateChange = {x: 1, y: 0};
            boardMove = {top: 0, left: -50};
            direction = 'right';
        break;
        case 83: //down
            coordinateChange = {x: 0, y: 1};
            boardMove = {top: -50, left: 0};
            direction = 'down';
        break;
        case 65: //left
            coordinateChange = {x: -1, y: 0};
            boardMove = {top: 0, left: 50};
            direction = 'left'
        break;
        default:
            coordinateChange = {x: 0, y: 0};
    }

    store.dispatch(setPlayerPos(coordinateChange))
    store.dispatch(setPlayerDirection(direction))
    store.dispatch(setBoardPos(boardMove))
}


const checkCollisions = keyCode => {
    const storeData = store.getState();
    const playerPosition = storeData.game.player.position;
    const boardSize = gameConfig.boardSize;
    const boardMatrix = storeData.game.board.matrix;

    switch(keyCode) {
        case 87: //up
            if (playerPosition.y === 0 || boardMatrix[playerPosition.y - 1][playerPosition.x] === 2) return true;
        break;
        case 68: //right
            if (playerPosition.x === boardSize.x-1 || boardMatrix[playerPosition.y][playerPosition.x + 1] === 2) return true;
        break;
        case 83: //down
            if (playerPosition.y === boardSize.y-1 || boardMatrix[playerPosition.y + 1][playerPosition.x] === 2) return true;
        break;
        case 65: //left
            if (playerPosition.x === 0 || boardMatrix[playerPosition.y][playerPosition.x - 1] === 2) return true;
        break;
        default:
            return;
    }
}