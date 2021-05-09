function difference(array1, array2) {

    var arr1 = flatten(array1, true);
    var arr2 = flatten(array2, true);

    var arr = [], diff = [];
    for (var i = 0; i < arr1.length; i++)
        arr[arr1[i]] = false;
    for (i = 0; i < arr2.length; i++)
        if (arr[arr2[i]] === true) { delete arr[arr2[i]]; }
        else arr[arr2[i]] = true;
    for (var k in arr)
        diff.push(k);
    return diff;
}

var flatten = function (arr, shallow, r) {
    if (!r) { r = []; }
    if (shallow) {
        return r.concat.apply(r, arr);
    }
    for (i = 0; i < arr.length; i++) {
        if (arr[i].constructor == Array) {
            flatten(arr[i], shallow, r);
        } else {
            r.push(arr[i]);
        }
    }
    return r;
};
document.write(difference([1, 2, 3], [100, 2, 1, 10]));

