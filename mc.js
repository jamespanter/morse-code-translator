const output = document.getElementById("output"),
  instructionInput = document.getElementById("instructions");
let inputHeader = document.getElementById("input-header"),
  outputHeader = document.getElementById("output-header");

const morseCode = {
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
  0: "-----",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  " ": "    "
};

const alphabet = {
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
  " ": "    ",
  "/": " "
};

window.addEventListener("keyup", () => {
  let textInput = document.getElementById("text-input").value.toLowerCase();
  if (inputHeader.innerHTML.includes("ENGLISH")) {
    const arrayOfLetters = textInput.split("");
    const arrayInMorse = arrayOfLetters.map(getMorseCodeValue);
    output.innerHTML = arrayInMorse.join("&nbsp");
  } else {
    let arrayOfLetters = textInput.split(" ");
    const arrayInText = arrayOfLetters.map(getTextValue);
    output.innerHTML = arrayInText.join("");
  }
});

const getMorseCodeValue = letter => morseCode[letter];
const getTextValue = character => alphabet[character];

const switchInput = () => {
  const headerOneStorage = inputHeader.innerHTML;
  const headerTwoStorage = outputHeader.innerHTML;
  inputHeader.innerHTML = headerTwoStorage;
  outputHeader.innerHTML = headerOneStorage;
  let textInput = document.getElementById("text-input");

  if (inputHeader.innerHTML.includes("MORSE")) {
    instructionInput.classList.add("shown");
  } else {
    instructionInput.classList.remove("shown");
  }
  output.innerHTML = "";
  textInput.value = "";
};
