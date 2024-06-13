export default class Tower {
    name;
    #data = [];

    
    constructor(name, data){
        this.name = name;
        this.#data = []
    };

    push(valor){
        this.#data.push(valor);
    };

    pop(){
        return this.#data.pop();
        
    };

    peek(){
        return this.#data[this.#data.length-1];
    };

    get isEmpty() {
        return this.#data.length === 0;
    };

    toString() {
        return JSON.stringify(this.#data);
    };
}