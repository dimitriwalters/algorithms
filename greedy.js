// GREEDY ALGORITHMS

// Interval Selection
function orderByFinish(intervalA, intervalB) {
    if (intervalA[1] < intervalB[1]) return -1;
    if (intervalA[1] > intervalB[1]) return 1;
    return 0;
}
function intervalSelection(intervals) {
    if (intervals.length < 1) {
        return [];
    }

    var selectedIntervals = [];
    intervals.sort(orderByFinish);
    selectedIntervals.push(intervals[0]);
    var lastFinish = intervals[0][1];

    for (var i=1; i<intervals.length; i++) {
        // greedy for earliest finish
        if (intervals[i][0] >= lastFinish) {
            selectedIntervals.push(intervals[i]);
            lastFinish = intervals[i][1];
        }
    }

    return selectedIntervals;
}

var intervals = [[9,11], [11, 12], [10.5,11.5]];
console.log("Interval Selection tests");
console.log(intervalSelection(intervals));