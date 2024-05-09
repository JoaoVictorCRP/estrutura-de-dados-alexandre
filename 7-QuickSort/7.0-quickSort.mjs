function quickSort(vetor, ini = 0, fim = vetor.length-1){
    if(fim<=ini) return; // Caso base

    const pivot = fim; // O pivot pode ser qualquer posição
    console.log('o pivot é: ')
    let div = ini - 1;

    for(let i=ini; i<fim; i++){
        if(vetor[pivot]>vetor[i]){
            div++ // se o número iterado é maior que o pivot, o div anda
            if(div !== i){
                [vetor[i], vetor[div]] = [vetor[div], vetor[i]]
            };
        };
    };
    div++;""
    if(vetor[div] > vetor[pivot] && div !== pivot){
        [vetor[pivot], vetor[div]] = [vetor[div], vetor[pivot]]
    };

    // Após isso, do div pra frente serão os maiores que o pivot, do div pra trás serão os menores.

    quickSort(vetor, ini, div-1) // Menores que o pivot (esquerda)
    quickSort(vetor, div+1, fim) // Maiores que o pivot (direita)
};

const nums = [2,5,7,1,6,3,4]
// const nums = [3,4,2,1]

quickSort(nums)

console.log(nums)