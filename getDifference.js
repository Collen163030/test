const getDifference = (n) => {
    if (n < 20) {
        return n / 2
    } else {
        var b = 20;
        var difference = Math.abs(b - n);
        return difference;
    }
}

console.log(getDifference());