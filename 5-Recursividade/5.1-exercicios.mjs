// 1. Crie uma função recursiva que receba um numero inteiro positivo N e calcule o somatório dos números de 1 a N.
function somatorio(n){
    if(n==1){
        return n
    } else {
        return n+=somatorio(n-1)
    }
}

console.log(`Somatória de 5: ${somatorio(5)}\n`)

// 2. Faça uma função recursiva que receba um número inteiro positivo par N e imprima utilizando console.log(), todos os números
// pares de 0 até N em ordem decrescente.
function devolvePares(n){
    if(n<=0){
        return
    } else if (n%2===0){
        console.log(n);
    }
    devolvePares(n-1);
};
const foo = 20
console.log(`Os numeros pares de 0 à ${foo} é:`)
devolvePares(20);