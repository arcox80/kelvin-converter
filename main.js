// this is today's forecast measured in Kelvin
const kelvin = 277;

// converts today's forecast from Kelvin to Celsius
const celsius = kelvin - 273;

// converts Celsius to Fahrenheit and rounds the answer down to nearest integer
const fahrenheit = Math.floor(celsius * (9 / 5) + 32);

// converts Celsius to Newton and rounds the answer down to nearest integer
const newton = Math.floor(celsius * (33 /100));

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${celsius} degrees Celsius.`);
console.log(`The temperature is ${newton} degrees Newton.`);
