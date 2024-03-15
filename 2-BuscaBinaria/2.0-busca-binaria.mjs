let comps;

function buscaBinaria(valorBusca, vetor){
    let inicio = 0;
    let fim = vetor.length - 1;
    comps = 0;

    while(fim>=inicio){ 
        comps++
        let meio = Math.floor((inicio+fim)/2) // Pegando o meio do vetor
        
        if(valorBusca === vetor[meio]){
            comps++
            return meio // Encontrou
        } 
        else if(valorBusca > vetor[meio]) {
            comps += 2
            inicio = meio+1 // O Meio do vetor é menor que o valor buscado, ande para a direita.
        } else {
            comps += 2
            fim = meio-1 // O meio do vetor é maior que o valor buscado, ande para a esquerda.
        }
    };
    return -1 // Não foi encontrado...
}

// const nums = [0, 11, 22, 33, 44, 55, 66, 77, 88, 99];
// console.log(`Posição de 33: ${buscaBinaria(33, nums)}`)

import {nomes} from '../data/vetor-nomes.mjs'
console.log(`Posição de ALEXANDRE: ${buscaBinaria('ALEXANDRE', nomes)}, Comparações realizadas: ${comps}`)



// Melhor caso:
// Binária --> Elemento do meio
// Sequencial --> Primeiro elemento

// Pior caso:
// Binário --> Elemento(s) da ponta
// Sequencial --> Último elemento