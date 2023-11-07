let n = 123452
function vyhid_u_vikno(n){
    let string = n.toString();
    let help = string.split('');
    for (let i = 0; i < help.length; i++) {
        for (let j = i + 1; j < help.length; j++) {
            if (help[i] < help[j]) {
                let temp = help[i];
                help[i] = help[j];
                help[j] = temp;
            }
        }
    }

    let i_ce_vse_zamist_odnoho_slova = help.join('');
    return parseInt(i_ce_vse_zamist_odnoho_slova, 10);
}
console.log(vyhid_u_vikno(n));