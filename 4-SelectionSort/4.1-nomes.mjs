let pass = 0; let comps = 0; let trocas = 0;

function selectionSort(array){

    for(let posSel=0; posSel<array.length - 1;posSel++){ 
        pass++
        let posMenor = posSel+1;

        for(let i = posMenor+1;i<array.length; i++){
            if(array[posMenor] > array[i]){
                posMenor=i;
            };
            comps++;
        };
        
        comps++;
        if(array[posSel] > array[posMenor]){
            [ array[posSel], array[posMenor] ] = [ array[posMenor], array[posSel] ];
            trocas++;
        };
    };
};

import {nomes} from '../data/vetor-nomes.mjs'

selectionSort(nomes);
console.log(nomes);
console.log(`\nComparações: ${comps}\nTrocas: ${trocas}\nPassagens: ${pass}`)

let memoria = process.memoryUsage().heapUsed / 1024 / 1024
console.log(`Gastou ${memoria.toFixed(2)}MB de memória`)