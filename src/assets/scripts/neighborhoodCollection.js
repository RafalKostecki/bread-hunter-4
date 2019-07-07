//Import configs
import gameConfig from '../configs/gameConfig.json';


const boardSize = gameConfig.boardSize;
const verticesQuantity = boardSize.x*boardSize.y;
let neighborhoodCollection = new Set();

export const createNeighborhoodCollection = () => {
    for (let i = 0; i < verticesQuantity; i++) {
        const vertexData = {
            id: i,
            proximity: setNeighborhoods(i),
            weight: 0
        }

        neighborhoodCollection.add(vertexData);
    }
    

    return neighborhoodCollection;
}


const setNeighborhoods = (vertex) => {
    //corner vertex

    if (vertex === 0) { //top left
        return [
            vertex + 1, vertex + boardSize.x
        ]
    }
    else if (vertex + 1 === boardSize.x) { // top right
        return [
            vertex - 1, vertex + boardSize.x
        ]
    }
    else if (vertex + 1 === verticesQuantity) { //bottom right
        return [
            vertex - 1, vertex - boardSize.x
        ]
    }
    else if (vertex + 1 === verticesQuantity - boardSize.x) {
        return [
            vertex + 1, vertex - boardSize.x
        ]
    }

    //other vertex
    if ((vertex + 1) % boardSize.x === 0) { //graniczny wierzchołek do prawej rkawedzi planszy
        return [
            vertex - 1, vertex - boardSize.x, vertex + boardSize.x
        ]
    }
    else if ((vertex - boardSize.x) % boardSize.x === 0) { //graniczny wierzchołek z lewej strony
        return [
            vertex + 1, vertex - boardSize.x, vertex + boardSize.x
        ]
    }
    else if (vertex < boardSize.x) { //wierzchołek granczny z góry
        return [
            vertex - 1, vertex + 1, vertex + boardSize.x
        ]
    }
    else if (vertex < verticesQuantity && vertex > verticesQuantity - boardSize.x) { //wierzchołek graniczny z dołu
        return [
            vertex - 1, vertex + 1, vertex - boardSize.x
        ]
    }
    else { //wierzchołek srodkowy (niegraniczny)
        return [
            vertex - 1, vertex + 1, vertex - boardSize.x, vertex + boardSize.x
        ];
    }
}