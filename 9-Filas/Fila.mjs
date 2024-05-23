export default class Queue {
    #data

    constructor(valor) {
        this.#data = [];
    };

    enfileirar(val){
        this.#data.push(val);
    };

    retirar(){
        this.#data.shift()
    };

    espiar(){
        return this.#data[0]
    };

    get estaVazia(){
        return this.#data.lenth === 0;
    };

    print(){
        let output = '[\n';
        for (let i=0; i<this.#data.length;i++){
            if(output !== '[\n'){
                output += ',\n'
            };
            output += ` [${i}] guarda o valor ${this.#data[i]}`
        }

        console.log(output + '\n]')
    }
};