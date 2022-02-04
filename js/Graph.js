// Code implemented with reference from:
// Article by Maiko Miyazaki:
//     Completed JavaScript Data Structure Course, and Here is What I Learned About Graph (+ Dijkstra Algorithm)
// Article link:
//     https://dev.to/maikomiyazaki/completed-javascript-data-structure-course-and-here-is-what-i-learned-about-graph-dijkstra-algorithm-57n8

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
    this.obstacleList = [];
  }

  addNode = (nodeId, obstacle) => {
    if (!this.adjacencyList[nodeId]) {
      this.adjacencyList[nodeId] = {};
    }
    if (obstacle === '1') {
      this.addObstacleNode(nodeId);
    }
  }

  addEdge = (node1, node2, weight) => {
    if (!this.adjacencyList[node1]) { this.addNode(node1); }
    if (!this.adjacencyList[node2]) { this.addNode(node2); }
    if (this.adjacencyList[node2] && this.adjacencyList[node1]) {
      if (!this.obstacleList.length || (!this.obstacleList.includes(node1) && !this.obstacleList.includes(node2))) {
        this.adjacencyList[node1][node2] = weight;
        this.adjacencyList[node2][node1] = weight;
      } else {
        // set the obstacle weight always Infinity
        this.adjacencyList[node1][node2] = Infinity;
        this.adjacencyList[node2][node1] = Infinity;
      }
    }
  }

  // obstacle list
  addObstacleNode = (nodeId) => {
    if (!this.obstacleList.length) {
      this.obstacleList = [];
      this.obstacleList.push(nodeId);
    } else if (!this.obstacleList.includes(nodeId)) {
      this.obstacleList.push(nodeId);
    }

    // remove obstacle edge
    for (const node in this.adjacencyList) {
      if (node == nodeId) {
        for (let i in this.adjacencyList[node]) {
          this.adjacencyList[node][i] = Infinity;
        }
      } else {
        for (let i in this.adjacencyList[node]) {
          if (i == nodeId)
            this.adjacencyList[node][i] = Infinity;
        }
      }
    }
  }

  removeEdge = (node1, node2) => {
    delete this.adjacencyList[node1][node2];
    delete this.adjacencyList[node2][node1];
    // this.adjacencyList[node1] = this.adjacencyList[node1].filter(node => node !== node2);
    // this.adjacencyList[node2] = this.adjacencyList[node2].filter(node => node !== node1);
  }

  removeNode = (nodeId) => {
    for (let i in this.adjacencyList[nodeId]) {
      this.removeEdge(nodeId, i);
    }
    // while (this.adjacencyList[nodeId]) {
    //   const adjacentNode = this.adjacencyList[nodeId].pop();
    //   this.removeEdge(nodeId, adjacentNode);
    // }
    delete this.adjacencyList[nodeId];
    this.removeObstacleNode(nodeId);
  }

  removeObstacleNode = (nodeId) => {
    if (this.obstacleList.length) {
      this.obstacleList.find((x, i) => {
        if (x == nodeId) {
          this.obstacleList.splice(i, 1);
        }
      })
    }
  }

  printAdjList = () => {
    console.log(this.adjacencyList);
  }

  resetGraph = () => {
    this.adjacencyList = {};
    this.obstacleList = {};
  }
}


class PriorityQueue {
  // Keeps track which route has the total cheapest cost
  constructor() {
    this.values = [];
  }

  enqueue = (val, priority) => {
    this.values.push({ val, priority });
    this.sort();
  }

  dequeue = () => {
    return this.values.shift();
  }

  sort = () => {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class DijkstraCustom {
  constructor(adjacencyList, start, finish) {
    // Note that JavaScript processes object keys as strings even if they're given integers.
    // Thus start and finish arguments should be passed in as strings.
    this.adjacencyList = adjacencyList;
    this.start = start;
    this.finish = finish;

    // List 1 - Record vertices with numbers that represent total cost to start
    this.costFromStartTo = {};
    // List 2 - tells you which node to check next
    this.checkList = new PriorityQueue();
    // List 3 - Record vertices previously visited to find the vertex's current cost
    this.prevVisited = {};

    this.current = null;
    this.result = [];
    this.algoSteps = [];
    /**
     * algoSteps.state.flag
     * 0: Initialised lists
     * 
     * 1: Top of while-loop
     *     Loop through neighbours
     *     2: Calculated cost to neighbour
     *         If better cost:
     *         3: Lists before update
     *         4: Updated lists
     *         Else:
     *         5: No update
     *     6: Solution found
     *     7: Push nodes to results array
     * 8: Return path solution
     * 9: No path solution found
     */

    this.initLists();
  }

  initLists = () => {
    // Initialise lists with Infinity and null values
    for (const node in this.adjacencyList) {
      if (node === this.start) {
        this.costFromStartTo[node] = 0;
        this.checkList.enqueue(node, 0);
      } else {
        this.costFromStartTo[node] = Infinity;
      }
      this.prevVisited[node] = null;
    };
    this.pushStateToSteps({ flag: 0 });
  }

  run = () => {
    while (this.checkList.values.length) {

      this.current = this.checkList.values[0].val;  // Read the value first to keep 'priority' in state

      this.pushStateToSteps({ flag: 1 });

      this.checkList.dequeue();  // Dequeue afterwards

      if (this.current === this.finish) {
        // Solution found
        this.pushStateToSteps({ flag: 6 });

        while (this.prevVisited[this.current]) {
          this.result.push(this.current);
          this.pushStateToSteps({ flag: 7, result: JSON.parse(JSON.stringify(this.result)) });
          this.current = this.prevVisited[this.current];
        }
        this.result.push(this.current);
        this.pushStateToSteps({ flag: 7, result: JSON.parse(JSON.stringify(this.result)) });
        this.result = this.result.reverse();
        break;
      } else {

        for (const neighbour in this.adjacencyList[this.current]) {
          let costToNeighbour = this.costFromStartTo[this.current] + this.adjacencyList[this.current][neighbour];
          this.pushStateToSteps({ flag: 2, neighbour, costToNeighbour });

          if (costToNeighbour < this.costFromStartTo[neighbour]) {
            // Update list values for the current-neighbour node.
            this.pushStateToSteps({ flag: 3, neighbour, costToNeighbour });
            this.costFromStartTo[neighbour] = costToNeighbour;
            this.prevVisited[neighbour] = this.current;
            this.checkList.enqueue(neighbour, costToNeighbour);
            this.pushStateToSteps({ flag: 4, neighbour, costToNeighbour });
          } else {
            // Don't update list values
            this.pushStateToSteps({ flag: 5, neighbour, costToNeighbour });
          }
        };
      }  // end if-else
    }  // end-while

    if (this.result.length === 0) {
      this.pushStateToSteps({ flag: 9 });
    } else {
      this.pushStateToSteps({ flag: 8, bestCost: this.costFromStartTo[this.finish] });
    }

    return this.result;
  }

  pushStateToSteps = (state) => {
    this.algoSteps.push({
      costFromStartTo: JSON.parse(JSON.stringify(this.costFromStartTo)),
      checkList: JSON.parse(JSON.stringify(this.checkList)),
      prevVisited: JSON.parse(JSON.stringify(this.prevVisited)),
      current: this.current,
      state: state
    });
  }
}
