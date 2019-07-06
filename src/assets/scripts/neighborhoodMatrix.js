//Import configs
import gameConfig from '../configs/gameConfig.json';


const boardSize = gameConfig.boardSize;
const verticesQuantity = boardSize.x*boardSize.y;
let neighborhoodMatrix = [];

export const createNeighborhoodMatrix = () => {
    createProximityPlaceholder();
    setNeighborhoods();

    return neighborhoodMatrix;
}


const createProximityPlaceholder = () => {
    for (let i = 0; i < verticesQuantity; i++) {
        neighborhoodMatrix.push(new Array(verticesQuantity).fill(0));
    }
}


const setNeighborhoods = () => {
    for (let vertex = 0; vertex < verticesQuantity; vertex++) {
        //set neigborhoods
    }
}