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
        
        if ((vertex + 1) % boardSize.x === 0) { //graniczny wierzchołek do prawej rkawedzi planszy

        }
        else if ((vertex - boardSize.x) % boardSize.x === 0) { //graniczny wierzchołek z lewej strony

        }
        else if (vertex < boardSize.x) { //wierzchołek granczny z góry

        }
        else if (vertex < verticesQuantity && vertex > verticesQuantity - boardSize.x) { //wierzchołek graniczny z dołu

        }
        else { //wierzchołek srodkowy (niegraniczny)

        }
    }
}