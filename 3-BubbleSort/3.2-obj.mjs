let pass, comps, trocas // Declaração de variáveis globais (passagens, comparações e trocas)

function bubbleSort(array, funcaoExterna){
    pass = 0, comps = 0, trocas = 0;
    let trocou;
    
    do {
        pass++
        trocou=false
        for(let i = 0; i<array.length-1; i++){ // Menor que (tamanho - 1), pois não verifica o último
            comps++;
            if(funcaoExterna(array[i],array[i+1])){
                [ array[i], array[i+1] ] = [ array[i+1], array[i] ]; // Troca com desestruturação
                trocou=true;
                trocas++;
            };
        };
    } while(trocou); // Se percorreu o array e não trocou nada, é sinal ele que está ordenado. Portanto, saia desse loop.
    
    return array

};

function Comparar(elem1, elem2){
    return elem1.nome_motorista>elem2.nome_motorista
};

import { objMotoristas } from "../data/motoristas-obj-desord.mjs";

console.time('Tempo de ordenação')
console.log(bubbleSort(objMotoristas, Comparar))
console.timeEnd('Tempo de ordenação')