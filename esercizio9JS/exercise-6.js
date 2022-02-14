function getKeys(obj) {
  let arr = [];
  for (let key in person){
    arr.push(key)
  }
  return arr
}

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 32,
  city: 'Rome',
  job: 'Developer',
};

const keys = getKeys(person);
console.log(keys);