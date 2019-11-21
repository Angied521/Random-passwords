//DOM elements
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

//object
const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol,    
};

//Gererate event listen

generateEl.addEventListener('click', () => { 
    const length = +lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;

    resultEl.innerText = generatePassword(
        hasLower, 
        hasUpper, 
        hasNumber, 
        hasSymbol, 
        length
    );
});

//Copy pasword to clipboard
clipboardEl.addEventListener('click', ()=> {
    const textarea = document.createElement('textarea');
    const password = resultEl.innerText;

    if(!password) {
        return;
    }
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('Password copied to clipboard');

})



// Gererate password function
function generatePassword(lower, upper, number, symbol, length) {

    let generatedPassword = '';

    const typesCount = lower + upper + number + symbol;

    console.log ('typesCount: ', typesCount);

    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter
    (
        item => Object.keys(item)[0]
    );

    console.log('typesArr: ', typesArr);

    if (typesCount === 0) {
        return '';
    }

    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];

            generatedPassword += randomFunc[funcName]()
            console.log('i = ' + i + ' generated: ' + generatedPassword);
                    });
    }

    const finalPassword = generatedPassword.slice(0, length);

    return finalPassword;

}


// Gernerator functions - http://www.net-comber.com/charset.html

function getRandomLower() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    const symbols = '@#$%^&*(){}=,./';
    return symbols[Math.floor(Math.random() * symbols.length)];
}


