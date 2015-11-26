var UNDISCOVERED = "undiscovered";
var DISCOVERED = "discovered";

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

function recursiveDFS(G, s) {
    var covers = [];

    for (var i=0; i<G.length; i++) {
        covers[i] = UNDISCOVERED;
    }

    return DFSvisit(G, s, covers);
}

function DFSvisit(G, v, covers) {
    var neighbours = G[v];
    covers[v] = DISCOVERED;

    for (var i=0; i<neighbours.length; i++) {
        if (covers[neighbours[i]] === UNDISCOVERED) {
            covers = DFSvisit(G, neighbours[i], covers);
        }
    }

    return covers;
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

// http://pages.cpsc.ucalgary.ca/~jacobs/Courses/cpsc331/F08/tutorials/Figures/directed_graph_example1.gif
var graph = [[1, 4], [2], [0,1], [2], [5], [4]];
var start = 0;

console.log(recursiveDFS(graph, start));
