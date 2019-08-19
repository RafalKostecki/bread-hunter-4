import PriorityQueue from './PriorityQueue';

/**
 * @typedef {Object} ShortestPaths
 * @property {Object} distances - shortest distances to all vertices
 * @property {Object} previousVertices - shortest paths to all vertices.
 */

/**
 * Implementation of Dijkstra algorithm of finding the shortest paths to graph nodes.
 * @param {Graph} graph - graph we're going to traverse.
 * @param {GraphVertex} startVertex - traversal start vertex.
 * @return {ShortestPaths}
 */
let counter = 0;


export const dijkstra = (graph, startVertex) => {
  console.log(graph)
  // Init helper variables that we will need for Dijkstra algorithm.
  const distances = {};
  const visitedVertices = {};
  const previousVertices = {};
  const queue = new PriorityQueue();

  // Init all distances with infinity assuming that currently we can't reach
  // any of the vertices except the start one.
  graph.forEach((vertex) => {
    distances[vertex.id] = Infinity;
    previousVertices[vertex.id] = null;
  });

  // We are already at the startVertex so the distance to it is zero.
  distances[startVertex.id] = 0;

  // Init vertices queue.
  queue.add(startVertex, distances[startVertex.id]);

  // Iterate over the priority queue of vertices until it is empty.
  while (!queue.isEmpty() || counter < 100) {
    counter++;
    
    // Fetch next closest vertex.
    let currentVertex = queue.poll();
    

    if (typeof currentVertex === 'number') currentVertex = graph.get(currentVertex);

    //console.log(currentVertex)
    // Iterate over every unvisited neighbor of the current vertex.
    currentVertex.proximity.forEach((neighbor) => {
      // Don't visit already visited vertices.
      if (!visitedVertices[neighbor]) {
        // Update distances to every neighbor from current vertex.
        const edge = currentVertex.weight;

        const existingDistanceToNeighbor = distances[neighbor];
        const distanceToNeighborFromCurrent = distances[currentVertex.id] + edge;

        // If we've found shorter path to the neighbor - update it.
        if (distanceToNeighborFromCurrent < existingDistanceToNeighbor) {
          distances[neighbor] = distanceToNeighborFromCurrent;

          // Change priority of the neighbor in a queue since it might have became closer.
          if (queue.hasValue(neighbor)) {
            queue.changePriority(neighbor, distances[neighbor]);
          }

          // Remember previous closest vertex.
          previousVertices[neighbor] = currentVertex;
        }

        // Add neighbor to the queue for further visiting.
        if (!queue.hasValue(neighbor)) {
          queue.add(neighbor, distances[neighbor]);
        }
      }
    });

    // Add current vertex to visited ones to avoid visiting it again later.
    visitedVertices[currentVertex.id] = currentVertex;
  }

  // Return the set of shortest distances to all vertices and the set of
  // shortest paths to all vertices in a graph.
  return {
    distances,
    previousVertices,
  };
}