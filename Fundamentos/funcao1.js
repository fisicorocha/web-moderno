// Função sem retorno

function imprimirSoma(a, b, c){
    console.log(a + b+ c)
};

imprimirSoma(2, 3, 10);

// Função com retorno

function soma(a, b=0){
    return a + b
};

console.log(soma(4,5));