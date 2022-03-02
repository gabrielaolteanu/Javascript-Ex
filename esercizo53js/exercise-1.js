function sum(...num) {
return num.reduce((somma, current) => {
return  somma + current})
}

console.log(sum(1, 2, 3, 4, 5));