// UI -> input text and get back morse Code
// translate other way

const convertText = () => {
    const textInput = document.getElementById('text-input').value;
    const output = document.getElementById('output');

    output.innerHTML = textInput;
    console.log(textInput)
}