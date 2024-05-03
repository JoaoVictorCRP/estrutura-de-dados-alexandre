function mergeSort(array){
    if(array.length<2)    return array
    let meio = Math.floor(array.length/2)
    // Divindo o vetor
    let vetEsq = array.slice(0, meio)
    let vetDir = array.slice(meio) // quando não há segundo parâmetro, já pega até o final

    console.log(`Vetor Esquerdo: ${vetEsq}`)
    console.log(`Vetor Direito: ${vetDir}`)

    vetEsq = mergeSort(vetEsq)
    vetDir = mergeSort(vetDir)

    let posEsq = 0;
    let posDir = 0;
    let vetRes = [];
    
    while(posEsq < vetEsq.length && posDir < vetDir.length){
        if(vetEsq[posEsq] < vetDir[posDir]){
            vetRes.push(vetEsq[posEsq])
            posEsq++
        } else {
            vetRes.push(vetDir[posDir])
            posDir++
        }
    }
    let sobra
    if(posEsq < posDir){
        sobra = vetEsq[posEsq]
    } else {
        sobra= vetDir[posDir]
    }
    vetRes.push(sobra);
    console.log(`Estou assim: ${vetRes}`)
    return vetRes
}



const nums = [7,3,2,16,24,4,11,9]
const numsOrdenados = mergeSort(nums)

console.log(`A lista ordenada é: ${numsOrdenados}`)