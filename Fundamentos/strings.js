const escola = "cod3r";

console.log(escola.charAt(4));//letra que está no índice 4
console.log(escola.charCodeAt(4));//codigo da tabela unicode
console.log(escola.indexOf('c'));//codigo da tabela unicode

console.log('Escola '.concat(escola).concat("!"));
console.log(escola.replace(3, 'e'));
console.log('Ana,Julio,Morsy'.split(','));// gera um array