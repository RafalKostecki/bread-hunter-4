import { store } from '../../Game';

//Import actions
import { changePlayerPos, setPlayerDirection, setBoardPos } from '../../redux/actions/gameActions';

//Import configs
import gameConfig from '../configs/gameConfig';

//Import scripts
import { checkCollisions } from './movement';


let currKeyDown = undefined;
let wasPressed = false;
let firstIteration = false;

let stepInterval = undefined;


export const keyDownHandler = key => {
    const isRunGame = store.getState().game.isRunGame;
    key = key.keyCode ? key.keyCode : key;

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
    key = key.keyCode ? key.keyCode : key;
    if (!currKeyDown === key.keyCode) return;
    
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

    movementAnimation(keyCode);
    store.dispatch(changePlayerPos(coordinateChange));
    store.dispatch(setPlayerDirection(direction));;
    store.dispatch(setBoardPos(boardMove));
}


const movementAnimation = keyCode => {
    const player = document.getElementById('playerBg');

    switch(keyCode) {
        case 87: //up
            player.style.backgroundPositionY = '-150px';             
        break;
        case 68: //right
            player.style.backgroundPositionY = '100px';   
        break;
        case 83: //down
            player.style.backgroundPositionY = '0px';   
        break;
        case 65: //left
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