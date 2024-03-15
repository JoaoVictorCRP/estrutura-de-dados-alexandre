function buscaBinaria(valorBusca, vetor){
    let inicio = 0;
    let fim = vetor.length - 1;

    while(fim>=inicio){ 

        let meio = Math.floor((inicio+fim)/2) // Pegando o meio do vetor
        
        if(valorBusca === vetor[meio]){
            return meio // Encontrou
        } 
        else if(valorBusca > vetor[meio]) {
            inicio = meio+1 // O Meio do vetor é menor que o valor buscado, ande para a direita.
        } else {
            fim = meio-1 // O meio do vetor é maior que o valor buscado, ande para a esquerda.
        }
    };
    return -1 // Não foi encontrado...
}

const nums = [0, 11, 22, 33, 44, 55, 66, 77, 88, 99];

console.log(`Posição de 33: ${buscaBinaria(33, nums)}`)
console.log(`Posição de 11: ${buscaBinaria(33, nums)}`)
console.log(`Posição de 88: ${buscaBinaria(33, nums)}`)

// Melhor caso:
// Binária --> Elemento do meio
// Sequencial --> Primeiro elemento

// Pior caso:
// Binário --> Elemento(s) da ponta
// Sequencial --> Último elemento