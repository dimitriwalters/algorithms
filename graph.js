function Stack() {
    var arr = [];
    return {
        push: function(val) {
            arr.push(val);
        },
        pop: function() {
            return arr.pop();
        },
        top: function() {
            return arr[arr.length - 1];
        },
        isEmpty: function() {
            return arr.length === 0;
        }
    }
}

function DFS(G, s) {
    var UNDISCOVERED = "undiscovered";
    var DISCOVERED = "discovered";
    var vertices = [];
    var neighbours;
    var current;
    var stack = new Stack();

    for (var i=0; i<G.length; i++) {
        vertices[i] = UNDISCOVERED;
    }

    stack.push(s);
    vertices[s] = DISCOVERED;

    while (!stack.isEmpty()) {
        current = stack.pop();
        neighbours = G[current];
        for (var i=neighbours.length-1; i>=0; i--) {
            if (vertices[neighbours[i]] === UNDISCOVERED) {
                stack.push(neighbours[i]);
                vertices[neighbours[i]] = DISCOVERED;
            }
        }
    }

    return vertices;
}

function Queue() {
    var arr = [];
    return {
        enqueue: function(val) {
            arr.push(val);
        },
        dequeue: function() {
            return arr.shift();
        },
        front: function() {
            return arr[0];
        },
        isEmpty: function() {
            return arr.length === 0;
        }
    }
}

function BFS(G, s) {
    var UNDISCOVERED = "undiscovered";
    var DISCOVERED = "discovered";
    var vertices = [];
    var neighbours = [];
    var current;
    var queue = new Queue();

    for (var i=0; i<G.length; i++) {
        vertices.push(UNDISCOVERED);
    }

    queue.enqueue(s);
    vertices[s] = DISCOVERED;

    while (!queue.isEmpty()) {
        current = queue.dequeue();
        neighbours = G[current];
        for (var i=0; i<neighbours.length; i++) {
            if (vertices[neighbours[i]] === UNDISCOVERED) {
                queue.enqueue(neighbours[i]);
                vertices[neighbours[i]] = DISCOVERED;
            }
        }
    }

    return vertices;
}

function arraysEqual(a1,a2) {
    return JSON.stringify(a1) == JSON.stringify(a2);
}

// http://pages.cpsc.ucalgary.ca/~jacobs/Courses/cpsc331/F08/tutorials/Figures/directed_graph_example1.gif
var graph = [[1, 4], [2], [0,1], [2], [5], [4]];

var resultsOfDFS = DFS(graph, 0);
var resultsOfBFS = BFS(graph, 0);

if (arraysEqual(resultsOfDFS, resultsOfBFS)) {
    console.log(resultsOfDFS);
} else {
    console.log("error in implementations");
}
