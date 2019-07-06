//Import configs
import gameConfig from '../configs/gameConfig.json';


export const getRandomNum = (min, max) => {
    const number = Math.floor(Math.random() * max) + min;

    return number;
}


export const vertexIdToFieldCoords = coordinates => {
    const boardSize = gameConfig.boardSize;

    if (coordinates.x > boardSize.x || coordinates.x < 0) throw new Error('Invalid X axis coordinate');
    else if (coordinates.y > boardSize.y || coordinates.y < 0) throw new Error('Invalid Y axis coordinate');


}