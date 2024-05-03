function mergeSort(array){
    if(array.length<2)    return array
    let meio = Math.floor(array.length/2)
    // Divindo o vetor
    let vetEsq = array.slice(0, meio)
    let vetDir = array.slice(meio) // Obs: quando não há segundo parâmetro, já pega até o final


    vetEsq = mergeSort(vetEsq)
    vetDir = mergeSort(vetDir)

    let posEsq = 0;
    let posDir = 0;
    let vetRes = [];
    
    while(posEsq < vetEsq.length && posDir < vetDir.length){
        if(vetEsq[posEsq] < vetDir[posDir]){ // Aqui é uma corrida de arrays, o que tiver números menores vence
            vetRes.push(vetEsq[posEsq])
            posEsq++
        } else {
            vetRes.push(vetDir[posDir])
            posDir++
        }
    }
    console.log(`Vetor esquerdo: ${vetEsq} \nVetor Direito: ${vetDir}`)
    let sobra
    if(posEsq < posDir){  // O array perdedor da corrida (array mais pesado) será adicionado aqui como sobra.
        sobra = vetEsq.slice(posEsq)
    } else {
        sobra= vetDir.slice(posDir)
    }
    console.log(`No momento, vetor de resultado está assim: ${vetRes}`)
    console.log(`A sobra (números maiores) está assim: ${sobra}\n`)
    return [...vetRes, ...sobra]
}



const nums = [7,3,2,78,16,24,4,11,9]
const numsOrdenados = mergeSort(nums)

console.log(`A lista ordenada é: ${numsOrdenados}`)