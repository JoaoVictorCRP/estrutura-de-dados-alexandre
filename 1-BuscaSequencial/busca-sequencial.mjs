function buscaSequencial(vetor, valorBusca){
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i].toLowerCase() === valorBusca.toLowerCase()) return i
    }

    return -1
}

const frutas = ["Laranja", "Maçã", "Pera", "Banana", "Jabuticaba", "Limão", "Mamão", "Uva"]

// console.log(`Posição da pera: ${buscaSequencial(frutas, "pera")}`)
// console.log(`Posição da pera: ${buscaSequencial(frutas, "uva")}`)
// console.log(`Posição da pera: ${buscaSequencial(frutas, "laranja")}`)
// console.log(`Posição da pera: ${buscaSequencial(frutas, "sapoti")}`) // Não tem sapoti no array, portanto retornará -1


import { nomes } from './data/vetor-nomes.mjs'

console.log(`Posição de ALEXANDRE: ${buscaSequencial(nomes, "ALEXANDRE")}`)
console.log(`Posição de JOAO: ${buscaSequencial(nomes, "JOAO")}`)
console.log(`Posição da VICTOR: ${buscaSequencial(nomes, "VICTOR")}`)
console.log(`Posição da JAVA DA SILVA: ${buscaSequencial(nomes, "JAVA DA SILVA")}`)