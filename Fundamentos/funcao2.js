// Armazenando uma função em uma variável

const imprimirSoma = function (a, b){
    console.log(a + b)
}

imprimirSoma(2,3);

// Armazenando uma função arrow em uma variável
const soma = (a, b) => {
    return a + b;
}

console.log(soma(2,1));

// Retorno implícito
const subtracao = (a, b) => a - b;
console.log(subtracao(5,6));

const area = (r) => {
    return Math.PI * Math.pow(r,2);
}

console.log(area(5).toFixed(3));
console.log(area(1).toFixed(3));