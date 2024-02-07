//Array destructuring.

//const numbers = [1, 2, 3, 4, 5];
//const [first, second, ...rest] = numbers;
//console.log(first); // 1
//console.log(second); // 2
//console.log(rest); // [3, 4, 5]

//Object destructuring.

//const person = { name: 'John', age: 30, job: 'Developer' };
//const { name, age, job } = person;
//console.log(name); // John
//console.log(age); // 30
//console.log(job); // Developer

//Destructuring with Different Variable Names:

//const person = { name: 'John', age: 30, job: 'Developer' };
//const { name: personName, age: personAge, job: personJob } = person;
//console.log(personName); // John
//console.log(personAge); // 30
//console.log(personJob); // Developer

//Destructuring in Function Parameters:

//function printPersonInfo({ name, age, job }) {
    //console.log(`${name} is ${age} years old and works as a ${job}.`);
//}

//const person = { name: 'Alice', age: 25, job: 'Designer' };
//printPersonInfo(person);
// Output: Alice is 25 years old and works as a Designer.