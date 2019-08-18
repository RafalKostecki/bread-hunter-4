import { store } from '../../Game';

//Import actions
import { changePlayerPos, setPlayerDirection, setBoardPos } from '../../redux/actions/gameActions';

//Import configs
import gameConfig from '../configs/gameConfig';


let currKeyDown = undefined;
let wasPressed = false;
let firstIteration = false;

let stepInterval = undefined;


export const keyDownHandler = key => {
    const isRunGame = store.getState().game.isRunGame;
    key = key.code ? key.code : key;

    if (!isRunGame) return;
    const playerStepTime = gameConfig.playerStepTime;

    if (!wasPressed) currKeyDown = key;
    wasPressed = true;

    if (!firstIteration) {
        changePlayerPosition(key);
        stepInterval = setInterval(() => {
            if (!wasPressed) return;

            changePlayerPosition(key);
        }, playerStepTime);
    }

    firstIteration = true;
}


export const keyUpHandler = key => {
    console.log(key.code)
    key = key.code ? key.code : key;
    if (!currKeyDown === key.code) return;
    
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
        case 'KeyW': //up
            coordinateChange = {x: 0, y: -1};
            boardMove = {top: 50, left: 0};
            direction = 'up';
        break;
        case 'KeyD': //right
            coordinateChange = {x: 1, y: 0};
            boardMove = {top: 0, left: -50};
            direction = 'right';
        break;
        case 'KeyS': //down
            coordinateChange = {x: 0, y: 1};
            boardMove = {top: -50, left: 0};
            direction = 'down';
        break;
        case 'KeyA': //left
            coordinateChange = {x: -1, y: 0};
            boardMove = {top: 0, left: 50};
            direction = 'left'
        break;
        default:
            coordinateChange = {x: 0, y: 0};
    }

    movementAnimation(keyCode);
    store.dispatch(changePlayerPos(coordinateChange));
    store.dispatch(setPlayerDirection(direction));;
    store.dispatch(setBoardPos(boardMove));
}


const checkCollisions = keyCode => {
    const storeData = store.getState();
    const playerPosition = storeData.game.player.position;
    const boardSize = gameConfig.boardSize;
    const boardMatrix = storeData.game.board.matrix;

    switch(keyCode) {
        case 'KeyW': //up
            if (playerPosition.y === 0 || boardMatrix[playerPosition.y - 1][playerPosition.x] === 2) return true;
        break;
        case 'KeyD': //right
            if (playerPosition.x === boardSize.x-1 || boardMatrix[playerPosition.y][playerPosition.x + 1] === 2) return true;
        break;
        case 'KeyS': //down
            if (playerPosition.y === boardSize.y-1 || boardMatrix[playerPosition.y + 1][playerPosition.x] === 2) return true;
        break;
        case 'KeyA': //left
            if (playerPosition.x === 0 || boardMatrix[playerPosition.y][playerPosition.x - 1] === 2) return true;
        break;
        default:
            return;
    }
}


const movementAnimation = keyCode => {
    const player = document.getElementById('playerBg');

    switch(keyCode) {
        case 'KeyW': //up
            player.style.backgroundPositionY = '-150px';             
        break;
        case 'KeyD': //right
            player.style.backgroundPositionY = '100px';   
        break;
        case 'KeyS': //down
            player.style.backgroundPositionY = '0px';   
        break;
        case 'KeyA': //left
            player.style.backgroundPositionY = '-50px';   
        break;
        default:
            return;
    }

    player.style.backgroundPositionX = '0px';   
    setTimeout(() => {
        if (player) player.style.backgroundPositionX = '-100px'; 
    }, 200 / 3);
    setTimeout(() => {
        if (player) player.style.backgroundPositionX = '-50px'; 
    }, 200 / 2);
}