const valores = [2.4, 4.5, 7.8, 5.2, 1.3];

console.log(valores[0], valores[4]);

valores[5] = 2.1;

console.log(valores);
console.log(valores.length);

valores.push({id: 3}, false, null, 'teste');

console.log(valores);
console.log(valores.pop());// remove o último elemento

delete valores[0];

console.log(typeof valores);