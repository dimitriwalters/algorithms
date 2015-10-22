function rotate90(matrix) {
    if (matrix.length < 1) {
        return [];
    }

    var m = matrix.length;
    var n = matrix[0].length;
    var rotatedMatrix = [];

    for (var i=0; i<n; i++) {
        rotatedMatrix.push([]);
    }

    for (i=m-1; i>=0; i--) {
        for (var j=0; j<n; j++) {
            rotatedMatrix[j].push(matrix[i][j]);
        }
    }

    return rotatedMatrix;
}
    
function printMatrix(matrix) {
    var out = "";
    for (var i=0; i<matrix.length; i++) {
        for (var j=0; j<matrix[i].length; j++) {
            out += matrix[i][j] + " ";
        }
        console.log(out);
        out = "";
    }
}

var matrix = [[1,2,3], [4,5,6]];
printMatrix(matrix);
printMatrix(rotate90(matrix));