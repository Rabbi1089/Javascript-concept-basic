//differenent between let and const (const - unchangeable , let-changeable);
const fatherName = 'andro';
let season = 'winter';
season = 'spring';

//condition 
//6 basic condition : >, <, ===, !== , <= ,>=
//multipule condition: && ,||
if (fatherName == 'andro') {
    console.log('ok')
} else if(season = 'winter'){
    console.log('ok')
}
else {
    console.log('not ok')
}

//about array
let number = [89,35,12,82];
//set array avalue with index
number[1] = 66;
console.log(number.length);
const getfiftyfive = () => 55;
getfiftyfive();