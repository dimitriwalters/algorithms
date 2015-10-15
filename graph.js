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

function DFS(source, dest, graph) {
    var visited = [];
    var stack = new Stack();
    var current;
    var neighbours;

    stack.push(source);

    while (!stack.isEmpty()) {
        current = stack.pop();
        // console.log('current: ' + current);
        visited.push(current);
        neighbours = graph[current - 1];

        for (var i=neighbours.length-1; i>=0; i--) {
            // console.log('neighbour: ' + neighbours[i]);
            if (neighbours[i] === dest) {
                return true;
            } else if (visited.indexOf(neighbours[i]) === -1) {
                stack.push(neighbours[i]);
            }
        }
    }

    return false;
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

var graph = [[4], [4,5], [5], [1,2,5], [2,3,4], []];
var graph2 = [[1, 2], [2], [], []];

console.log(DFS(1, 3, graph));
console.log(BFS(graph2, 0));
