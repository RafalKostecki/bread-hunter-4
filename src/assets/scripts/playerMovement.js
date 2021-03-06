import { store } from '../../Game';

//Import actions
import { changePlayerPos, setPlayerDirection, setBoardPos } from '../../redux/actions/gameActions';

//Import scripts
import { checkCollisions } from './movement';
import { movementAnimation } from './movementAnimation';


let currKeyDown = undefined;
let wasPressed = false;
let firstIteration = false;

let stepInterval = undefined;


export const keyDownHandler = key => {
    const isRunGame = store.getState().game.isRunGame;
    const playerSpeed = store.getState().game.playerSpeed;
    key = key.code ? key.code : key;

    if (!isRunGame) return;

    if (!wasPressed) currKeyDown = key;
    wasPressed = true;

    if (!firstIteration) {
        changePlayerPosition(key);
        stepInterval = setInterval(() => {
            if (!wasPressed) return;

            changePlayerPosition(key);
        }, playerSpeed);
    }

    firstIteration = true;
}


export const keyUpHandler = key => {
    key = key.code ? key.code : key;
    if (!currKeyDown === key.code) return;
    
    wasPressed = false;
    firstIteration = false;
    clearInterval(stepInterval);
}


const changePlayerPosition = keyCode => {
    const storeData = store.getState();
    const playerSpeed = storeData.game.playerSpeed;
    const playerPosition = storeData.game.player.position;

    if (checkCollisions(keyCode, playerPosition)) return;

    let coordinateChange = {x: 0, y: 0};
    let boardMove = {top: 0, left: 0};
    let direction = 'down';

    switch(keyCode) {
        case 'KeyW': //up
        case 'ArrowUp':
            coordinateChange = {x: 0, y: -1};
            boardMove = {top: 50, left: 0};
            direction = 'up';
        break;
        case 'KeyD': //right
        case 'ArrowRight':
            coordinateChange = {x: 1, y: 0};
            boardMove = {top: 0, left: -50};
            direction = 'right';
        break;
        case 'KeyS': //down
        case 'ArrowDown':
            coordinateChange = {x: 0, y: 1};
            boardMove = {top: -50, left: 0};
            direction = 'down';
        break;
        case 'KeyA': //left
        case 'ArrowLeft':
            coordinateChange = {x: -1, y: 0};
            boardMove = {top: 0, left: 50};
            direction = 'left'
        break;
        default:
            coordinateChange = {x: 0, y: 0};
    }

    movementAnimation(keyCode, 'playerBg', playerSpeed);
    store.dispatch(changePlayerPos(coordinateChange));
    store.dispatch(setPlayerDirection(direction));;
    store.dispatch(setBoardPos(boardMove));
}
