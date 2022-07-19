const med1 = 7.13;
const med2 = 8.05;
const med3 = 11.912;

const areaq = Math.pow(med1, 2);
const areat = med1 * med2 / 2.0;
const areatr = (med1 + med2) * med3 / 2.0;


console.log(`Area do quadrado = ${areaq.toFixed(4)}`);
console.log(`Area do triangulo = ${areat.toFixed(4)}`);
console.log(`Area do trapezio = ${areatr.toFixed(4)}`);