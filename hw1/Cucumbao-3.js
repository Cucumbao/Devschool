let m = 1071225
function findNb(m) {
    let n=0
    let sum = 0

    for (n = 1; sum < m; n++) {
        sum += Math.pow(n, 3);
    }
    if (sum === m) {
        return n - 1;
    }
    return -1;
}
let result =findNb(m)
console.log('кількість кубів для обєму', result)