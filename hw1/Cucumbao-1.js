let a = 16;
function suma(a){
    if (a<0){
        return 0
    }
    let b = 0
    for (let i= 0; i < a; i++){
        if (i % 3 === 0 || i % 5 === 0){
            b += i;
        }
    }
    return b;
}
console.log(`Сума кратних "3" або "5" до ${a} = ${suma(parseInt(a))}`);