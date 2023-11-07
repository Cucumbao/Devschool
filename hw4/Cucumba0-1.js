const abc = "ABCDEFGHIJGKLMNOPQRSTUVWXYZ"
const num = {}

for (let i = 0; i < abc.length; i++){
    num[abc[i]]= i
}
function Encode (text, key){
    let code = ' '
    for(let i=0; i < text.length; i++){
        const char = text[i]
        if (num.hasOwnProperty(char)) {
            code += abc[(num[text[i]] + num[key[i % key.length]]) % abc.length]
        }else {
            code += char
        }
    }
    return code
}
function Decode (text, key){
    let code = ''
    for(let i=0; i < text.length; i++){
        const char = text[i]
        if (num.hasOwnProperty(char)) {
            code += abc[(num[text[i]] - num[key[i % key.length]] + abc.length) % abc.length]
        }else{
            code += char
        }
    }
    return code
}

console.log("encoded word: ", Encode("FIOTFREE", "KOTIC"))
console.log("decoded word: ", Decode("PWIBHCSX", "KOTIC"))