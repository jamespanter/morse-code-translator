const output = document.getElementById('output'),
    instructionInput = document.getElementById('input-instructions');
let inputHeader = document.getElementById('input-header'),
    outputHeader = document.getElementById('output-header');

const morseCode = [{
    a: '.-',
    b: '-...',
    c: '-.-.',
    d: '-..',
    e: '.',
    f: '..-.',
    g: '--.',
    h: '....',
    i: '..',
    j: '.---',
    k: '-.-',
    l: '.-..',
    m: '--',
    n: '-.',
    o: '---',
    p: '.--.',
    q: '--.-',
    r: '.-.',
    s: '...',
    t: '-',
    u: '..-',
    v: '...-',
    w: '.--',
    x: '-..-',
    y: '-.--',
    z: '--..',
    0: '-----',
    1: '.----',
    2: '..---',
    3: '...--',
    4: '....-',
    5: '.....',
    6: '-....',
    7: '--...',
    8: '---..',
    9: '----.',
    ' ': '    ',
}];

const alphabet = [{
    "-----": "0",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
    "/": " ",
    "-·-·--": "!",
    "·-·-·-": ".",
    "--··--": ",",
    ' ': '    ',
    '/': ' ',
}];

window.addEventListener('keyup', () => {
    if (inputHeader.innerHTML.includes('TEXT')) {
        let textInput = document.getElementById('text-input').value.toLowerCase();
        const arrayOfLetters = textInput.split('');
        const arrayInMorse = arrayOfLetters.map(getMorseCodeValue);
        output.innerHTML = arrayInMorse.join('&nbsp');
    } else {
        const textInput = document.getElementById('text-input').value.toLowerCase();
        let arrayOfLetters = textInput.split(' ');
        const arrayInText = arrayOfLetters.map(getTextValue);
        output.innerHTML = arrayInText.join('');
    }
})

const getMorseCodeValue = letter => morseCode[0][letter];
const getTextValue = character => alphabet[0][character];

const switchInput = () => {
    const headerOne = inputHeader.innerHTML;
    const headerTwo = outputHeader.innerHTML;
    inputHeader.innerHTML = headerTwo;
    outputHeader.innerHTML = headerOne;
    let textInput = document.getElementById('text-input');

    if (inputHeader.innerHTML.includes('MORSE')) {
        instructionInput.classList.add('shown');
    } else {
        instructionInput.classList.remove('shown');
    }
    output.innerHTML = '';
    textInput.value = '';
}