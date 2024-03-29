let pass = 0; let comps = 0; let trocas = 0;

function selectionSort(array, fnExterna){

    for(let posSel=0; posSel<array.length - 1;posSel++){ // Loop de posição selecionada (valor isolado)
        pass++
        let posMenor = posSel+1;

        for(let i = posMenor+1;i<array.length; i++){ // Neste loop olharemos o último elemento também, portanto nada de length-1.
            if(fnExterna(array[posMenor], array[i]) ){
                posMenor=i;
            };
            comps++;
        };
        
        comps++; // não colocar dentro do if...
        if(fnExterna(array[posSel], array[posMenor]) ){ // Comparando o valor isolado e o menor dentre os analisados.
            [ array[posSel], array[posMenor] ] = [ array[posMenor], array[posSel] ];
            trocas++;
        };
    };
};

function Comparar(elem1, elem2){
    if(elem1.razao_social === elem2.razao_social){
        return elem1.nome_motorista > elem2.nome_motorista;
    }

    return elem1.razao_social>elem2.razao_social;
};

import { objMotoristas } from '../data/motoristas-obj-desord.mjs'

selectionSort(objMotoristas, Comparar);
console.log(objMotoristas);