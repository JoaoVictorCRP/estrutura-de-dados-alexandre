// Vamos ver agora sobre o funcionamento da busca sequencial em objetos.

import { objNomes } from '../data/vetor-obj-nomes.mjs';

function buscaSequencial(vetor, funcaoExterna){
    // Realiza a busca, com base numa função externa de comparação
    for(let i=0; i < vetor.length; i++){
        if(funcaoExterna(vetor[i])) return i
    };
    return -1;
};


function comparaNome(obj){
    // Essa função fará a comparação do nome presente no objeto, realizando um teste se ele possui o valor "ALEXANDRE"
    return obj.first_name === 'ALEXANDRE';
};

function comparaFrequencia(obj){
    // Essa função fará a comparação do valor de frequencia total no objeto, realizando um teste se o valor é 97
    return obj.frequency_total === 97;
};


console.log(`POSIÇÃO DE ALEXANDRE: ${buscaSequencial(objNomes, comparaNome)}`) // Output: "ALEXANDRE" está no vetor de Nº 4764
console.log(`Posição de frequencia 97: ${buscaSequencial(objNomes, comparaFrequencia)}`); // Output: 97 está no vetor de Nº 456