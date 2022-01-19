"use strict"

// 1. hello world

alert('Im JavaScript');


// 2. variables

let admin, name;
name = 'John';
admin = name;
alert(admin);

let ourPlanetName = 'Earth', currentUserName = 'Dima';


// 3. interaction: alert, prompt, confirm

let userName = prompt('enter ur name');
alert(`Ur name is ${userName}`);


// 4. basic operators, mathematics

let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);
alert(+a + +b); // 12


// 5. conditional branch: if, '?'

let answer = prompt('what the official name of JS?')
if (answer === 'ECMAScript'){
    alert('All right');
} else {
    alert('Not right')
}

let getNumber = prompt('enter number')
if (+getNumber === 0){
    alert(0);
} else if (+getNumber > 0) {
    alert(1)
} else {
    alert(-1)
}

let result = (a + b < 4) ? 'Мало' : 'Много';

let message = (login == 'Сотрудник') ? 'Привет' :
    (login == 'Директор') ? 'Здравствуйте' :
    (login == '') ? 'Нет логина' :
    '';


// 6. logical operators

let age = prompt('enter ur age')
if (age < 14 || age > 90){
    alert(true)
}
else {
    alert(false)
}

let login = prompt('enter ur login')
if (login == 'admin'){
    let password = prompt('enter password')
    if (password == '1111'){
        alert('welcome')
    } else if (password == null || password == ''){
        alert('back')
    } else {
        alert('wrong password')
    }
} else if (login == null || login == ''){
    alert('back')
} else {
    alert('do not know u')
}


// 7. while and for loops

for (let i = 2; i <= 10; i++){
    if (i % 2 == 0){
        alert(i)
    }
}

let i = 0;
while (i<3){
    alert( `number ${i}!` );
    i++
}

while (true){
    let number = prompt('enter number > 100');
    if (+number > 100) break;
}

let n = prompt('enter n');
mark:
for (let i = 2; i <= n; i++){
    for (let j = 2; j < i; j++){
        if (i % j == 0) continue mark;
    }
    alert(i)
}


// 8. "switch"

if (browser == 'Edge'){
    alert( "You've got the Edge!" );
} else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera'){
    alert( 'Okay we support these browsers too' );
} else {
    alert( 'We hope that this page looks ok!' );
}

const number = +prompt('Введите число между 0 и 3', '');
switch (number){
    case 0:
        alert('Вы ввели число 0');
        break;
    case 1:
        alert('Вы ввели число 1');
        break;
    case 2:
    case 3:
        alert('Вы ввели число 2, а может и 3');
        break;
}


// 9. functions

function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
}
function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
}

function min(a, b){
    return (a < b) ? a : b;
}
min(1, 2)

function pow(x, n){
    return x**n;
}
let x = prompt('enter x'), n = prompt('enter n');
alert(pow(x, n));


// 10. arrow functions

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}
ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
);