// json

const student = {
    name : 'rahim',
    age : 23,
    institute : 'programing hero'
}

const jsonStudent = JSON.stringify(student);
console.log(student);
console.log(jsonStudent);

//convert json to string 
const student1 = JSON.parse(jsonStudent);
console.log(student1);

//add a array with another array
const products = [
    {name : 'laptop' , brand: 'hp',  price: 35000, color : 'silver'},
    {name : 'mobile' , brand: 'iphone',  price: 5000, color : 'black'},
    {name : 'sunglass' , brand: 'gucci',  price: 15000, color : 'green'},
    {name : 'watch' , brand: 'titan',  price: 12000, color : 'silver'}
]
//product 

const product = [
    {name : 'sunglass' , brand: 'gucci',  price: 15000, color : 'gray'}
]

const newProduct = [...products , product];
console.log(newProduct);

//create a array with elamite a item

const reamaining = products.filter(p => p.name !== 'mobile');
console.log('reamaong is : ');
console.log(reamaining)