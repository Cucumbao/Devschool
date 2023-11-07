let num = 13;
function hanoiMoves(n) {
    if (n === 0) {
        return 0;
    }
    return Math.pow(2, n) - 1;

}
let moves = hanoiMoves(num);
console.log("Мінімальна кількість ходів для " + num + " дисків: " + moves);