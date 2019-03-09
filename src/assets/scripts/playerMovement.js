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
    switch(keyCode) {
        case 87: //up
            console.log('up');
        break;
        case 68: //right
            console.log('right');
        break;
        case 83: //down
            console.log('down');
        break;
        case 65: //left
            console.log('left');
        break;
        default:
            console.log('default case')
    }
}