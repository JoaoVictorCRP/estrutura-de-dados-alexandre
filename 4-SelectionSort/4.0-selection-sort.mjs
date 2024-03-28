let pass = 0; let comps = 0; let trocas = 0;

function selectionSort(array){

    for(let posSel=0; posSel<array.length - 1;posSel++){ // Loop de posição selecionada (valor isolado)
        pass++
        let posMenor = posSel+1;

        for(let i = posMenor+1;i<array.length; i++){ // Neste loop olharemos o último elemento também, portanto nada de length-1.
            if(array[posMenor] > array[i]){
                posMenor=i;
            };
            comps++;
        };
        
        comps++; // não colocar dentro do if...
        if(array[posSel] > array[posMenor]){ // Comparando o valor isolado e o menor dentre os analisados.
            [ array[posSel], array[posMenor] ] = [ array[posMenor], array[posSel] ];
            trocas++;
        };
    };
};

const nums = [77, 44, 22, 33, 99, 55, 88, 0, 66, 11];

selectionSort(nums);
console.log(nums);
console.log(`\nComparações: ${comps}\nTrocas: ${trocas}\nPassagens: ${pass}`)

let memoria = process.memoryUsage().heapUsed / 1024 / 1024
console.log(`Gastou ${memoria.toFixed(2)}MB de memória`)