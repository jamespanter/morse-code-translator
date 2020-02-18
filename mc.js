const output = document.getElementById('output');
const morseCode = [{
    a: '._',
    b: '_...',
    c: '_._.',
    d: '_..',
    e: '.',
    f: '.._.',
    g: '__.',
    h: '....',
    i: '..',
    j: '.___',
    k: '_._',
    l: '._..',
    m: '__',
    n: '_.',
    o: '___',
    p: '.__.',
    q: '__._',
    r: '._.',
    s: '...',
    t: '_',
    u: '.._',
    v: '..._',
    w: '.__',
    x: '_.._',
    y: '_.__',
    z: '__..',
    0: '_____',
    1: '.____',
    2: '..___',
    3: '...__',
    4: '...._',
    5: '.....',
    6: '_....',
    7: '__...',
    8: '___..',
    9: '____.',
}];

const convertText = () => {
    const textInput = document.getElementById('text-input').value.toLowerCase();
    const arrayOfLetters = textInput.split("");

    const arrayInMorse = arrayOfLetters.map(getMorseCodeValue);
    output.innerHTML = arrayInMorse.join('');
}

const getMorseCodeValue = (letter) => {
    console.log(morseCode[0][letter])
    return letter = morseCode[0][letter]
}