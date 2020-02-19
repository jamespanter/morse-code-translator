const output = document.getElementById('output');
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
}];

const convertText = () => {
    if (inputHeader.innerHTML.includes('Text')) {
        const textInput = document.getElementById('text-input').value.toLowerCase();
        const arrayOfLetters = textInput.split('');
        console.log(arrayOfLetters)
        const arrayInMorse = arrayOfLetters.map(getMorseCodeValue);
        output.innerHTML = arrayInMorse.join('');
    } else {
        const textInput = document.getElementById('text-input').value.toLowerCase();
        const arrayOfLetters = textInput.split('');

        const arrayInText = arrayOfLetters.map(getTextValue);
        output.innerHTML = arrayInText.join('');
    }
}

const getMorseCodeValue = (letter) => {
    return morseCode[0][letter];
}

const getTextValue = (character) => {
    return alphabet[0][character];
}

const switchInput = () => {
    const headerOne = inputHeader.innerHTML;
    const headerTwo = outputHeader.innerHTML;
    inputHeader.innerHTML = headerTwo;
    outputHeader.innerHTML = headerOne;
}