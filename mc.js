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

const convertText = () => {
    if (inputHeader.innerHTML.includes('TEXT')) {
        let textInput = document.getElementById('text-input').value.toLowerCase();
        const arrayOfLetters = textInput.split('');
        const arrayInMorse = arrayOfLetters.map(getMorseCodeValue);
        console.log(arrayInMorse)
        output.innerHTML = arrayInMorse.join('&nbsp');
    } else {
        const textInput = document.getElementById('text-input').value.toLowerCase();
        console.log(textInput)
        let arrayOfLetters = textInput.split(' ');
        console.log(arrayOfLetters)
        const arrayInText = arrayOfLetters.map(getTextValue);
        console.log(arrayInText);
        output.innerHTML = arrayInText.join('');
    }
}

const getMorseCodeValue = letter => morseCode[0][letter];
const getTextValue = character => alphabet[0][character];

const switchInput = () => {
    const headerOne = inputHeader.innerHTML;
    const headerTwo = outputHeader.innerHTML;
    inputHeader.innerHTML = headerTwo;
    outputHeader.innerHTML = headerOne;

    if (inputHeader.innerHTML.includes('MORSE')) {
        instructionInput.classList.add('shown');
    } else {
        instructionInput.classList.remove('shown');
    }


    // let textInput = document.getElementById('text-input').value.toLowerCase();
    // console.log(textInput)
    // const inputContent = textInput;
    // const outputContent = output.innerHTML;

    // textInput = outputContent;
    // output.innerHTML = inputContent;

    // console.log(inputContent, outputContent)
}