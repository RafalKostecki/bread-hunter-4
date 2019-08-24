export const movementAnimation = (keyCode, charDOMBg, speed) => {
    const char = document.getElementById(charDOMBg);

    if (!char) return;

    switch(keyCode) {
        case 'KeyW': //up
            char.style.backgroundPositionY = '-150px';             
        break;
        case 'KeyD': //right
            char.style.backgroundPositionY = '100px';   
        break;
        case 'KeyS': //down
            char.style.backgroundPositionY = '0px';   
        break;
        case 'KeyA': //left
            char.style.backgroundPositionY = '-50px';   
        break;
        default:
            return;
    }

    char.style.backgroundPositionX = '0px';   
    setTimeout(() => {
        if (char) char.style.backgroundPositionX = '-100px'; 
    }, speed / 3);
    setTimeout(() => {
        if (char) char.style.backgroundPositionX = '-50px'; 
    }, speed / 2);
}