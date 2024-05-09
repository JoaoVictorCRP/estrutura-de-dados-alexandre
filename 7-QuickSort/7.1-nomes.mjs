function quickSort(vetor, ini=0, fim= vetor.length-1){
    if(fim<=ini) return;

    const pivot = fim; // O pivot pode ser qualquer posição
    // console.log(`o pivot é: ${pivot}`)
    let div = ini - 1;

    for(let i=ini; i<fim; i++){
        if(vetor[pivot]>vetor[i]){
            div++ // se o número iterado é maior que o pivot, a div anda

            if(div !== i){ // Para que não troque por si mesmo.
                [vetor[i], vetor[div]] = [vetor[div], vetor[i]]
            };
        };
    };
    div++;
    if(vetor[div] > vetor[pivot] && div !== pivot){
        [vetor[pivot], vetor[div]] = [vetor[div], vetor[pivot]] // Fará o pivot ir para o meio
    };

    // Após isso, do div pra frente serão os maiores que o pivot, do div pra trás serão os menores.

    quickSort(vetor, ini, div-1) // Menores que o pivot (esquerda)
    quickSort(vetor, div+1, fim) // Maiores que o pivot (direita)

}

import {nomes} from '../data/nomes-desord.mjs'

quickSort(nomes)
let memoria = process.memoryUsage().heapUsed / 1024 / 1024 // Método do node para ver quanto o programa usou de memória
console.log(nomes)
console.log(`Memória utilizada: ${memoria.toFixed(2)}MB`) // Bem rápido, PORÉM, consome bastante memória.
