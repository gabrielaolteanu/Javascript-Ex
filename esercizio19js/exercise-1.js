const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

const person2 = person1;
person2.firstName= "Simon"
// Modificando person2 , person1 cambia pure perchè fanno riferimento alla stessa locazione di memoria "

console.log(person1);
console.log(person2);