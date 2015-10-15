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

// http://www.algolist.net/img/graphs/DFS/DFS-example-1.png
var graph = [[4], [4,5], [5], [1,2,5], [2,3,4], []];

console.log(DFS(1, 3, graph));
