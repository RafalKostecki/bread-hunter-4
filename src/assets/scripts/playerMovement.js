import { store } from '../../Game';

//Import actions
import { changePlayerPos, setPlayerDirection, setBoardPos } from '../../redux/actions/gameActions';

//Import configs
import gameConfig from '../configs/gameConfig';

//Import scripts
import { checkCollisions } from './movement';
import { movementAnimation } from './movementAnimation';


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
    key = key.code ? key.code : key;
    if (!currKeyDown === key.code) return;
    
    wasPressed = false;
    firstIteration = false;
    clearInterval(stepInterval);
}


const changePlayerPosition = keyCode => {
    const storeData = store.getState();
    const playerPosition = storeData.game.player.position;

    if (checkCollisions(keyCode, playerPosition)) return;

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

    movementAnimation(keyCode, 'playerBg', gameConfig.playerStepTime);
    store.dispatch(changePlayerPos(coordinateChange));
    store.dispatch(setPlayerDirection(direction));;
    store.dispatch(setBoardPos(boardMove));
}
