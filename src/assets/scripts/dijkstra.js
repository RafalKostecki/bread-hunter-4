//Import scripts
import { createBoardGrahp } from './boardGraph';


export const dijkstra = startVertex => {
  const distances = {};
  const visitedVertices = {};
	const previousVertices = {};
	const graph = createBoardGrahp();
	
	graph.forEach(vertex => {
		distances[vertex.id] = Infinity;
		previousVertices[vertex.id] = null;
	})

	distances[startVertex] = 0;
	console.log('graph', graph)
	console.log(distances)

	graph.forEach(currentVertex => {
		console.log(currentVertex);

		currentVertex.proximity.forEach((neighbor) => {

      // Don't visit already visited vertices.
      if (!visitedVertices[neighbor]) {
        // Update distances to every neighbor from current vertex.

        const existingDistanceToNeighbor = distances[neighbor];
        const distanceToNeighborFromCurrent = distances[currentVertex.id] + graph.get(neighbor).weight;

				console.log(currentVertex.id, distanceToNeighborFromCurrent);
        // If we've found shorter path to the neighbor - update it.
        if (distanceToNeighborFromCurrent < existingDistanceToNeighbor) {
          distances[neighbor] = distanceToNeighborFromCurrent;

          // Change priority of the neighbor in a queue since it might have became closer.
          // if (queue.hasValue(neighbor)) {
          //   queue.changePriority(neighbor, distances[neighbor.getKey()]);
          // }

					console.log('here')
          // Remember previous closest vertex.
          previousVertices[neighbor] = currentVertex;
        }

        // Add neighbor to the queue for further visiting.
        // if (!queue.hasValue(neighbor)) {
        //   queue.add(neighbor, distances[neighbor.getKey()]);
        // }
			}
			
    });

    // Add current vertex to visited ones to avoid visiting it again later.
    visitedVertices[currentVertex.id] = currentVertex;
	})


	return {
		distances,
    previousVertices,
	}
}

