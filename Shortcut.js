//truthy value = 'almas', 5, true , [], {}
//falsy value = '', false , null , undefined
let Myvar = 50;
if (Myvar) {
    Myvar = Myvar*100;
    console.log(Myvar);
}else{
    Myvar = 0;
}

// how to check negative number 
let myMoney = -50;
if(!myMoney){
    console.log(myMoney);
}else{
    console.log('Money can not be negative')
}
//here is condition statement

const Money = 800;

 let food;
if (Money > 50) {
    food = 'biyrani';
}else{
    food = 'cha-biscuit';
}
console.log(food);

//we can write this as shortcut as ternary
let food1 = (Money > 100) ? 'biyrani' : 'cha';
//console.log(food1);

let food2 = (Money > 100 && Myvar < 500) ? 'water' : 'mum';
//console.log(food2);
//convert a number as a string 
var number = 500;
//console.log(typeof(number));
var number1 = 500 + '';
//console.log(typeof(number1));
//convert a string as a number
var stringNum = '500';
//console.log(typeof(stringNum));
var stringNum1 = +'500';
//console.log(typeof(stringNum1));

// call a function on depends of condition
const isActive = false;
const showUser = () => console.log('show user');
const hideUser = () => console.log('hide user');
isActive ? showUser() : hideUser();