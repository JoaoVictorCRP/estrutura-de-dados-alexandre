export default class Stack{
    #data = [];

    
    constructor(data, ){
        this.#data = []
    };

    inserir(valor){
        this.#data.push(valor);
    };

    remover(){
        return this.#data.pop();
        
    };

    espiar(){
        return this.#data[this.#data.length-1];
    };

    get isEmpty() {
        return this.#data.length === 0;
    };

    toString() {
        return JSON.stringify(this.#data);
    };
}