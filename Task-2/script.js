function spiral(arr) {
    var result = [];

    function subSpiral(a) {
        if (a.length == 1) {
            result = result.concat(a[0]);
            return;
        } else
            if (a.length > 1) {
                result = result.concat(a[0]);
                for (var i = 1; i < a.length - 1; i++) {
                    result.push(a[i].pop());
                }
                result = result.concat(a[a.length - 1].reverse());
                for (i--; i > 0; i--) {
                    result.push(a[i].shift());
                }
                a.shift();
                a.pop();

                subSpiral(a);
            } else
            return;
    }

    subSpiral(arr);
    console.log(result);
}

spiral([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20]
]);