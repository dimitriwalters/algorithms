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
