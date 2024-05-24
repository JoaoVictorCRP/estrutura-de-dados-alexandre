export default class Deque {
    #data

    constructor(){
        this.#data = []
    }

    insereFrente(valor){
        this.#data.unshift(valor)
    }

    insereAtras(valor){ // Ai pai paran...
        this.#data.push(valor)
    }

    removeFrente(){
        return this.#data.shift();
    };

    removeAtras(){
        return this.#data.pop();
    };

    olharFrente(){
        return this.#data[0];
    };

    olharAtras(){
        return this.#data[this.#data.length-1];
    };

    get estaVazio(){
        return this.#data.length === 0;
    }

    print(){
        let output = '[\n';
        for (let i=0; i<this.#data.length;i++){
            if(output !== '[\n'){
                output += ',\n'
            };
            output += `    [${i}] guarda o valor ${this.#data[i]}`
        }

        console.log(output + '\n]')
    }
}