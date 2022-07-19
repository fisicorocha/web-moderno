const pessoa = {
    nome: 'Cesar',
    idade: 25,
    endereco: {
        rua: 'Tal',
        numero: 001
    }
};

const {nome, idade} = pessoa;
console.log(nome, idade);

const {endereco: {rua, numero}} = pessoa;

console.log(rua, numero)