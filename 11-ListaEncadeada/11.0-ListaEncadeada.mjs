import LinkedList from "./LinkedList.mjs";

const linkada = new LinkedList();

// Inserindo Elementos
linkada.insert(99, 1) // Elemento 0
linkada.insert(3, 5) // Elemento 1
linkada.insert(7,10) // Indice 3
linkada.insert(0,3) // Indice 2

// Verificando Elementos
//   1 - Cabeça e Cauda
linkada.peek
//   2 - Por posição (iteração)
linkada.peekPos(3)