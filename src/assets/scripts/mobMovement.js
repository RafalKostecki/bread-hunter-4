export const mobMovement = (shortestPath, destination) => {
    console.log(destination)
    const pathToDestination = [];
    let previousVertex = destination;

    while(shortestPath.previousVertices[previousVertex]) {
        pathToDestination.push(shortestPath.previousVertices[previousVertex].id);
        
        previousVertex = shortestPath.previousVertices[previousVertex].id
    }

    console.log(pathToDestination)
    
}