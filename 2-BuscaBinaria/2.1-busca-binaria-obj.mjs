import { objNomes } from "../data/vetor-obj-nomes.mjs";

function buscaBinaria(vetor, funcaoExterna){
    let inicio = 0;
    let fim = vetor.length - 1

    while(inicio<=fim){
        let meio = Math.floor((inicio+fim)/2)

        switch(funcaoExterna(vetor[meio])){
            case 0:
                return meio
            case 1:
                inicio = meio + 1
            break
            default:
                fim = meio - 1
        };
    };
};

function comparar(valorMeio){
    /* Função de comparação
    
        Retorna 0 ~~> Se o valor do meio do vetor for igual a "ALEXANDRE"
        Retorna 1 ~~> Se o valor do meio do vetor for maior (alfabeticamente) que "ALEXANDRE"
        Retorna -1 ~~> Caso o nome "ALEXANDRE" não exista.
    */
    if('ALEXANDRE' === valorMeio.first_name) return 0;
    
    else if ('ALEXANDRE' > valorMeio.first_name) return 1;

    else return -1;
};


console.log(`Posição de ALEXANDRE no objeto de nomes: ${buscaBinaria(objNomes, comparar)}`)