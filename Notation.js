const person = {
    name : 'karim',
    age : 28,
    profession : 'job',
    1 : 'summer'
}

// we can access a objet value with in three system

console.log(person.name);//dot
console.log(person['age']);//third bracket
const pro = 'profession';
const profession = person[pro];//bracket
console.log(profession);
const season = 1;
const seasonName = person[season];
console.log(seasonName);