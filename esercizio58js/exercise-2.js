const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    const ciclo= persons.find(item => item.id === id)
    if(ciclo){
      resolve (ciclo)
    } else {
      reject (new Error("ERRORE, id non esiste"))
    } 
    },3000) 
  });
}

fetchPersonById(8).then((person) => console.log(person));