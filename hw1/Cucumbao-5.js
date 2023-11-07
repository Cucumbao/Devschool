let tak =("3 6 7 2 9 1");
let a = tak.split(" ").map(Number);

function ja_uze_nimagu(a){
    let b = Math.max(...a)
    let c = Math.min(...a)
    return (`${c} ${b}`)
}
result = ja_uze_nimagu(a)
console.log(result)