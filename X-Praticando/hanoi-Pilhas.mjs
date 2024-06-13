import Tower from "./Tower.mjs";


let movimentos = 0;

function moveDisk(source, target){
    let disk = source.pop();
    target.push(disk)
}

function towerOfHanoi(n, source, auxiliary, target) {
    if(n==1){ // Se houver só 1 disco, mova para o destino direto.
        moveDisk(source, target)
        console.log(`Movendo o disco 1 da torre ${source.name} para a torre ${target.name}...`)
        movimentos++;
        return;
    }
    towerOfHanoi(n-1, source, target, auxiliary); movimentos++; // Se há mais de um disco, move-se o disco de cima para a torre auxiliar.
    console.log(`Movendo o disco ${n} da torre ${source.name} para a torre ${target.name}...`)
    moveDisk(source, target)
    towerOfHanoi(n-1, auxiliary, source, target); // Disco 1 estará agora no haste auxiliar

}


// APlicando...
const nDisks = 3;
const towerA = new Tower('A');
towerA.push(3)
towerA.push(2)
towerA.push(1)
const towerB = new Tower('B')
const towerC = new Tower('C')

towerOfHanoi(nDisks, towerA, towerB, towerC);

console.log(`TORRE A: ${towerA}`)
console.log(`TORRE B: ${towerB}`)
console.log(`TORRE C: ${towerC}`)