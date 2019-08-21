export const movementAnimation = (keyCode, charDOMBg) => {
    const char = document.getElementById(charDOMBg);

    switch(keyCode) {
        case 87: //up
            char.style.backgroundPositionY = '-150px';             
        break;
        case 68: //right
            char.style.backgroundPositionY = '100px';   
        break;
        case 83: //down
            char.style.backgroundPositionY = '0px';   
        break;
        case 65: //left
            char.style.backgroundPositionY = '-50px';   
        break;
        default:
            return;
    }

    char.style.backgroundPositionX = '0px';   
    setTimeout(() => {
        if (char) char.style.backgroundPositionX = '-100px'; 
    }, 200 / 3);
    setTimeout(() => {
        if (char) char.style.backgroundPositionX = '-50px'; 
    }, 200 / 2);
}