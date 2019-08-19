//Import configs
import gameConfig from '../configs/gameConfig.json';


export const getRandomNum = (min, max) => {
    const number = Math.floor(Math.random() * max) + min;

    return number;
}


export const vertexIdToFieldCoords = vertexId => {
    const boardSize = gameConfig.boardSize;

    let coordinates = {
        x: vertexId % boardSize.x,
        y: Math.floor(vertexId / boardSize.x)
    }
    
    return coordinates;
}