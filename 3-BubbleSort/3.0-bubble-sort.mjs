let pass, comps, trocas // Declaração de variáveis globais (passagens, comparações e trocas)

function bubbleSort(array){
    pass = 0, comps = 0, trocas = 0;
    let trocou;

    console.log(trocou);
    
    do {
        pass++
        trocou=false
        for(let i = 0; i<array.length-1; i++){ // Menor que (tamanho - 1), pois não verifica o último
            comps++
            if(array[i] > array[i+1]){
                [ array[i], array[i+1] ] = [ array[i+1], array[i] ] // Troca com desestruturação
                trocou=true
                trocas++
            };
        };
    } while(trocou); // Se percorreu o array e não trocou nada, é sinal ele que está ordenado. Portanto, saia desse loop.
    
    return array
};

let nums = [77,44,22,33,99,55,88,0,66,11];
console.log(`Vetor ordenado: ${bubbleSort(nums)}`);
console.log(`Comparações: ${comps}`)
console.log(`Trocas: ${trocas}`)