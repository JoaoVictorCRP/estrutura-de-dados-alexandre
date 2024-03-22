// Vejamos uma ordenação em dois níveis: primeiro razao_social e depois nome_motorista

let pass, comps, trocas;

function bubbleSort(array, funcaoExterna){
    pass = 0, comps = 0, trocas = 0;
    let trocou;
    
    do {
        pass++
        trocou=false
        for(let i = 0; i<array.length-1; i++){
            comps++;
            if(funcaoExterna(array[i],array[i+1])){
                [ array[i], array[i+1] ] = [ array[i+1], array[i] ];
                trocou=true;
                trocas++;
            };
        };
    } while(trocou); 

    return array;

};

function Comparar(elem1, elem2){
    if(elem1.razao_social === elem2.razao_social){  // Se o nome da empresa for igual
        return elem1.nome_motorista > elem2.nome_motorista; // Compare nome do motorista como "critério de desempate"
    };
    
    return elem1.razao_social>elem2.razao_social;
};


import { objMotoristas } from "../data/motoristas-obj-desord.mjs";

console.time('Tempo de ordenação')
console.log(bubbleSort(objMotoristas, Comparar))
console.timeEnd('Tempo de ordenação')