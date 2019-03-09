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
            if (wasPressed) console.log("move", key.keyCode);
            // here i need to recoginze keyCode and change Player position at game board
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
