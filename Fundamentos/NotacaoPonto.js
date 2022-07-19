const obj = {};
obj.nome = 'Lucas';
console.log(obj.nome);

function adj (nome){
    this.nome = nome;
}

const obj2 = new adj('Cadeira');
const obj3 = new adj('Mesa');
console.log(obj2.nome);
console.log(obj3.nome);