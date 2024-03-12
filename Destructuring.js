const number = [42,65];
// const x = number[0];
// const y = number[1];==============================================

//those code can be written as

//const [x , y ] = [42,65];===========================================

//those code can be written as

const [x , y] = number;
console.log(x,y);

//object destructing
const {name , age} = {name : abdul , age:14}
const employee = {
    name:Brahmi,
    salary:3000,
    join : 2019
}

const {salary , join } = employee

//just need to ensure assigned property are in object;

