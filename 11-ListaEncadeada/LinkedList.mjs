class Node { // Um nó armazena o seu próprio valor + o apontamento para seu sucessor.
    constructor(value){
        this.data = value;
        this.next = null;
    };
};

export default class LinkedList{
    #head;      // cabeça da lista (head)
    #tail;      // cauda da lista (tail)
    #count;     // quantidade de nodos na lista.

    constructor(){
        this.#head = null;
        this.#tail = null;
        this.#count = 0;
;    }

    get isEmpty(){
        return this.#count === 0;
    };

    get count(){
        return this.#count;
    };

    insert(pos, val) {
        const inserted = new Node(val)
        
        // 1º Caso - Lista está vazia
        if( this.isEmpty) {
            this.#head = inserted;
            this.#tail = inserted;
        }

        // 2º Caso - Lista não está vazia, inserção na primeira posição
        else if(pos===0){
            inserted.next = this.#head;
            this.#head = inserted;
        }

        // 3º Caso - Lista não está vazia, inserção na última posição
        else if (pos >= this.#count){
            this.#tail.next = inserted;
            this.#tail = inserted;
        }

        // 4º Caso - Posição intermediária
        else {
            let before = this.#head;
            for(let i=0; i<pos; i++){
                before = before.next;
            }
            let after = before.next // O after não se trata do nodo em si, mas do valor que ele armazena.s
            
            inserted.next = after;
            before.next = inserted;
        }

        this.#count++; // Aumentando a quantidade de nodos
    };

    remove(pos) {
        // 1º Caso - Lista está vazia, ou posição informada está fora do range da lista
        if(this.isEmpty || pos>this.#count-1 || pos<0 ) {
            return undefined
        }

        let removed;

        // 2º Caso - Remoção do início
        if(pos===0){
            removed = this.#head;
            this.#head = this.#head.next;
            
            if(this.#count === 1){
                this.#tail = null;
            }
        }

        // Remoção de nodo intermediário ou final
        else {
            let before = this.#head;
            for(let i=0;i<pos;i++){
                before = before.next;
            };
            removed = before.next;  

            let after = removed.next

            before.next = after;

            if(pos===this.#count-1){ // Removendo na última posição
                before.#tail = before
            }
            
        }

        count--; // Diminuindo a contagem de nodos
    }

    get peek(){
        return console.log(`A cabeça contém: ${this.#head.data}\nA cauda contém: ${this.#tail.data}`)
    };

    peekPos(pos){
        // Posição invalida
        if(pos<0){
            return undefined
        }
        // Primeira posição
        if(pos===0){
            return console.log(this.#head.data)
        }
        // última posição
        if(pos===this.#count){
            return console.log(this.#tail.data)
        }
        // Lista está vazia
        if( this.isEmpty ){
            return console.log(`A LL está vazia`)
        }

        // Posição além do limite da LL
        if(pos>this.#count){
            return console.log(`\nA LL não possui um tamanho de ${pos} nodos. \
                \nNo entanto, na última posição (${this.#count}), temos ${this.#tail.data}`)
        }

        // Posição no meio
        let selected =this.#head;
        for(let i=1;i<=pos;i++){
            selected = selected.next
        }
        
        return console.log(selected.data);
    }
};