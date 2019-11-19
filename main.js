//DOM elements
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const clEl = document.getElementById('cl');


const randomFunc = {
    lower: getRandowUpper,
    upper: getRandowUpper,
    number: getRandowNumber,
    symbol: getRandomSymbol,    
};

//Gererate event listen

generateEl.addEventListener('click', () => { 
    const length = +lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEL.checked;

    resultEl.innerText = generatePassword(
        hasLower, 
        hasUpper, 
        hasNumber, 
        hasSymbol, 
        length
    );
});

//Copy pasword to clipboard
Clipboard.addEventListener('click', ( )=> {
    const textarea = document.createElement('textarea');
    const password = resultEl.innerText;

    if(!password) {
        return;
    }
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select ();
    document.execCommand('copy');
    textarea.remove();
    alert('Password copied to clipboard')

})



// Gererate password function
function generatePassword(lower, upper, number, symbol, length){
    // 1. Init pw var
    // 2 filter out unchecke types
    // 3. loop over lenght call generator function for each type
    // 4. Add final pw to the pw var and return

    let generatedPassword = '';

    const typesCount = lower + upper + number + symbol;

    //console.log ('typesCount: ', typesCount);

    const typesArr = [{ lower }, { upper }, { numbers }, { symbol }].filter
    (item => Object.values(item)[0]);

    //console.log('typesArr: ', typesArr);

    if(typesCount === 0) {
        return '';
    }

    for(let i = 0; 1 < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];

            generatedPassword += randomFunc[funcName]();
                    });
    }

    const finalPassword = gereratedPassword.slice(0,length);

    return finalPassword;

}


// Gernerator functions - http://www.net-comber.com/charset.html

function getRandowLower() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandowUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandowNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    const symbols = '@#$%^&*(){}=,./';
    return symbols[Math.floor(Math.random() * symbols.length)];
}

console.log(getRandomUpper) 
