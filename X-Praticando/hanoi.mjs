// Params:
// n -> numero de discos
// source -> haste de origem
// auxiliary -> haste auxiliar
// target -> haste alvo
let movimentos = 0;

function towerOfHanoi(n, source, auxiliary, target) {
    if(n==1){ // Se houver só 1 disco, mova para o destino direto.
        console.log(`Movendo o disco 1 da torre ${source} para a torre ${target}...`)
        movimentos++;
        return;
    }
    towerOfHanoi(n-1, source, target, auxiliary); movimentos++; // Utilizaremos a haste alvo como auxiliar
    console.log(`Movendo o disco ${n} da torre ${source} para a torre ${target}...`)
    towerOfHanoi(n-1, auxiliary, source, target); // Disco 1 estará agora no haste auxiliar
}

const nDisks = 4
towerOfHanoi(nDisks, 'A','B','C')
console.log(`Total de movimentos: ${movimentos}`)

// Dynamic Progamming :O