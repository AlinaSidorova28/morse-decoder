const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let array = [];
    for(let i=0; i<expr.length; i+=10){
        array.push(expr.substr(i, 10));
    }

    for(let i=0; i<array.length; i++){
        array[i] = array[i].replace(/00/g, '');
        array[i] = array[i].replace(/10/g, '.');
        array[i] = array[i].replace(/11/g, '-');
        array[i] = array[i].replace(/\*\*\*\*\*\*\*\*\*\*/g, ' ');
    }

    let new_expr = [];
    for(let i=0; i<array.length; i++){
        let k = Object.keys(MORSE_TABLE).indexOf(array[i]);
        if(array[i] === ' '){
           new_expr.push(' ');
        }
        else{
            new_expr.push(MORSE_TABLE[Object.keys(MORSE_TABLE)[k]]);
        }
    }
    return new_expr.join('');
}

module.exports = {
    decode
}