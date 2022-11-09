let password = document.getElementById('password')

let yourName = prompt('Whats your name?');

let yourSurname = prompt('Whats your surname?');

let yourColor = prompt('Whats your favourite color?');

const number = 21;

// metodo madda
// document.getElementById('password').innerHTML = yourName + yourSurname + yourColor + number;

// metodo del professore
// document.getElementById('password').innerHTML = `Your password is: ${yourName}${yourSurname}${yourColor}${number}`

// metodo daniel (include let password che c'è all'inizio)
password.innerHTML = `Your password is: ${yourName}${yourSurname}${yourColor}${number}`;
