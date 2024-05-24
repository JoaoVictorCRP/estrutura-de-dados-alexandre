import Queue from "./Fila.mjs";
let atendido;
let fila = new Queue();

console.log(`A fila está vazia? ${fila.estaVazia}`)

fila.enfileirar('Larissa')
fila.enfileirar('Pedro')
fila.enfileirar('João')
fila.enfileirar('Alexandre')
fila.enfileirar('Léo')

fila.print()

for(let i=0;i<5;i++){
    atendido = fila.retirar()
    console.log(`O cliente ${atendido} é o 1º da fila no momento, ele está sendo atendido...`)
    console.log(`PRÓXIMO!!!\n\n`)
}

fila.enfileirar('Jorge Ben Jor')
fila.enfileirar('Roberto Carlos')

console.log(`Secretária: Olha só quem vem lá, é o ${fila.espiar()}`)