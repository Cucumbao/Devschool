function maxHonor(arr, d) {
    const n = arr.length;
    let maxHonorSum = -Infinity;

    for (let i = 0; i < n; i++) {
        let currentHonorSum = 0;
        for (let j = 0; j < d; j++) {
            currentHonorSum += arr[(i + j * Math.floor(n / d)) % n];
        }
        maxHonorSum = Math.max(maxHonorSum, currentHonorSum);
    }

    return maxHonorSum;
}
const arr1 = [1, 7, 3, 4];
const d1 = 2;
console.log(maxHonor(arr1, d1));