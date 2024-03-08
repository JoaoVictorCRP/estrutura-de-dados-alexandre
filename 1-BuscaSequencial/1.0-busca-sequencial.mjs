function buscaSequencial(vetor, valorBusca){
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i].toLowerCase() === valorBusca.toLowerCase()) return i // Passando para letra minúscula para que não haja problemas de caixa.
    };

    return -1;
};

// 1) Introdução - usca em um vetor simples
// const frutas = ["Laranja", "Maçã", "Pera", "Banana", "Jabuticaba", "Limão", "Mamão", "Uva"]
// console.log(`Posição da pera: ${buscaSequencial(frutas, "pera")}`)
// console.log(`Posição da pera: ${buscaSequencial(frutas, "uva")}`)
// console.log(`Posição da pera: ${buscaSequencial(frutas, "laranja")}`)
// console.log(`Posição da pera: ${buscaSequencial(frutas, "sapoti")}`) // Não tem sapoti no array, portanto retornará -1


// 2) Busca no vetor importado
import { nomes } from './data/vetor-nomes.mjs';
console.log(`Posição de ALEXANDRE: ${buscaSequencial(nomes, "ALEXANDRE")}`);
console.log(`Posição de JOAO: ${buscaSequencial(nomes, "JOAO")}`);
console.log(`Posição da VICTOR: ${buscaSequencial(nomes, "VICTOR")}`);
console.log(`Posição da JAVA DA SILVA: ${buscaSequencial(nomes, "JAVA DA SILVA")}`);