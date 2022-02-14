const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}
Object.entries(person).forEach(([chiave, valore])=> console.log( `${chiave}: ${valore} `)) 

// Print values of person using Object.keys