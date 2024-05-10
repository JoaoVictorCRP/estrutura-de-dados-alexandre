/* 
    Pilhas são estruturas que armazenam dados usando a estratégia LIFO (Last In, First Out).
    O último a entrar será o primeiro a sair, como uma pilha de pratos, por exemplo, pois você precisa retirar o
    primeiro para ter acesso aos últimos. 
    
    Pilhas são usadas em tarefas computacionais que requem a INVERSÃO DA ORDEM DE ENTRADA DOS DADOS

    BASICAMENTE: OPERAÇÕES DE INSERÇÃO E REMOÇÃO SOMENTE NO FINAL!
*/

import Stack from "./Pilha.mjs";

let pilha = new Stack() // Instanciando

console.log(`Está vazia? ${pilha.isEmpty}`);

// Uma pilha de livros
pilha.inserir('Frankenstein');
pilha.inserir('Moby Dick');
pilha.inserir('Sapiens');
pilha.inserir('O Pequeno Príncipe');
pilha.inserir('Os Miseráveis') // <-- O último a entrar... logo, o primeiro a sair!

// Espiando...
console.log(`Qual livro está no topo da pilha? ${pilha.espiar()}\n`);
let retirado
for(let i=0; i<5;i++){
    retirado = pilha.remover();
    console.log(`Retirei da piha o livro ${retirado}`);
}

