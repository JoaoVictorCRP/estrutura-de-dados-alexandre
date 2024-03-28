function selectionSort(array){
    for(let posSel=0; posSel<array.length - 1;posSel++){ // Loop de posição selecionada

        let posMenor = posSel+1;

        for(let i = posMenor+1;i<array.length; i++){ // Neste loop, olharemos o último elemento.
            if(array[posMenor] > array[i]){
                posMenor=i;
            };
        };

        if(array[posSel] > array[posMenor]){ // Comparando o valor isolado e o menor dentre os analisados.
            [ array[posSel], array[posMenor] ] = [ array[posMenor], array[posSel] ];
        };
    };
};

const nums = [77, 44, 22, 33, 99, 55, 88, 0, 66, 11];

selectionSort(nums);

console.log(nums);