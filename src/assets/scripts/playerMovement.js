import { store } from '../../Game';
import { setPlayerPos } from '../../redux/actions/gameActions';
import gameConfig from '../configs/gameConfig';

let currKeyDown = undefined;
let wasPressed = false;
let firstIteration = false;

let stepInterval = undefined;

export const keyDownHandler = key => {
    const playerStepTime = gameConfig.playerStepTime;

    if (!wasPressed) console.log("start", key.keyCode);
    if (!wasPressed) currKeyDown = key.keyCode;
    wasPressed = true;

    if (!firstIteration) {
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

    console.log("stop", key.keyCode);
}


const changePlayerPosition = keyCode => {
    let coordinateChange = {x: 0, y: 0};

    switch(keyCode) {
        case 87: //up
            coordinateChange = {x: 0, y: -1};
        break;
        case 68: //right
            coordinateChange = {x: 1, y: 0};
        break;
        case 83: //down
            coordinateChange = {x: 0, y: 1};
        break;
        case 65: //left
            coordinateChange = {x: -1, y: 0};
        break;
        default:
            console.log('default case')
    }

    store.dispatch(setPlayerPos(coordinateChange))
}