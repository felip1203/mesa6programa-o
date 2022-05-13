// Soma
function adicionar (a , b) {
    return a + b;
}

// Subtrair

function subtrair (a , b) {
    return a - b;
}

// Multiplicar

function multiplicar (a , b) {
    return a * b;
}

// Divisão

function divisao (a , b) {
    return a / b;
}

// Nivel 2

//console.log ("-------------- Teste de Operações / Calculador --------------")

console.log (adicionar (1 , 2))
console.log (subtrair (1 , 2))
console.log (multiplicar (1 , 2))
console.log (divisao (5 , 2))
console.log (divisao (5 , 0))

//Nivel 3
function quadradoDoNumero (a) {
    return multiplicar (a,a)
}
console.log (quadradoDoNumero(5))


// Media de tres

function mediaDeTresNumeros (a,b,c) {
    return divisao(adicionar(adicionar(a,b),c),3); 
}
console.log(mediaDeTresNumeros(8 , 2, 2))

// Porcentagem

function calculaPorcentagem (a,b) {
    return divisao(multiplicar(a,b),100);
}
console.log(calculaPorcentagem(300,15))

// Geradorporcentagem

function geradorDePorcentagem (a,b) {
    return multiplicar(divisao(a,b),100);
}
console.log(geradorDePorcentagem (50,200))