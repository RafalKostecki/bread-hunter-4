export const generatePathToDestination = (shortestPath, destination) => {
    let pathToDestination = [];
    let previousVertex = destination;

    while(shortestPath.previousVertices[previousVertex]) {
        pathToDestination.push(shortestPath.previousVertices[previousVertex].id);
        
        previousVertex = shortestPath.previousVertices[previousVertex].id
    }

    pathToDestination.pop(); //delete startVertex
    pathToDestination = pathToDestination.reverse();

    return pathToDestination;
}