const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

const asArray = Object.entries(person);

const filtered = asArray.filter(([key, value]) => typeof value === 'number');
const justStrings = Object.fromEntries(filtered);
const json = JSON.stringify(justStrings);

console.log(json); // Should return: { id: 1, age: 25 }