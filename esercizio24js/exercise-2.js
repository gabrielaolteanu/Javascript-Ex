const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

Object.values(person).forEach((valore) => console.log( `${valore} `))

// Print values of person using Object.values