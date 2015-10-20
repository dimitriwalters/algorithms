function merge(array1, array2) {
    var mergedArray = [];
    var i = 0;
    var j = 0;

    while (i < array1.length && j < array2.length) {
        if (array1[i] <= array2[j]) {
            mergedArray.push(array1[i]);
            i++;
        } else {
            mergedArray.push(array2[j]);
            j++;
        }
    }

    while (i < array1.length) {
        mergedArray.push(array1[i]);
        i++;
    }
    while (j < array2.length) {
        mergedArray.push(array2[j]);
        j++;
    }

    return mergedArray;
}

function mergeSort(array) {
    if (array.length < 2) {
        return array;
    }

    var mid = Math.floor(array.length / 2);
    var left = mergeSort(array.splice(0, mid));
    var right = mergeSort(array);

    return merge(left, right);
}

var arr = [4, 1, 6, 2, 5, 7, 3];
console.log(mergeSort(arr));