//Import configs
import gameConfig from '../configs/gameConfig.json';


const boardSize = gameConfig.boardSize;
const verticesQuantity = boardSize.x*boardSize.y;
let neighborhoodCollection = new Set();

export const createNeighborhoodCollection = () => {
    for (const vertex of verticesQuantity) {
        const vertexData = {
            id: vertex,
            proximity: setNeighborhoods(vertex),
            weight: 0
        }

        neighborhoodCollection.add(vertexData);
    }
    

    return neighborhoodCollection;
}


const setNeighborhoods = (vertex) => {
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