const addUnderscore = arr => {
    var odds;
    var newArr = []

    for (var i = 0; i < arr.length; i++) {
        if ((arr[i] % 2) != 1) {
            var evens = arr[i];
            newArr.push(evens)
        }
        else {
            var odds = arr[i] + "_";
            newArr.push(odds)
        }
    }
    return newArr;
}

console.log("addunderscore", addUnderscore([1, 3, 5, 6, 7, 9]))