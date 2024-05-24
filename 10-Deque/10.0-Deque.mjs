import Deque from "./Deque.mjs";

const filaHospital = new Deque()

filaHospital.insereAtras('João')
filaHospital.insereAtras('Yasmin')
filaHospital.insereAtras('Eloísa')
filaHospital.insereAtras('Danilo')
filaHospital.insereAtras('Guilherme')


filaHospital.print()


console.log(`${filaHospital.olharFrente()} é o próximo a ser chamado.`)
console.log(`${filaHospital.olharAtras()} será o último a ser chamado.`)


console.log(`\nEssa não, chegou o senhor Epaminondas, ele é velho e possui atendimento prioritário.\n`)
filaHospital.insereFrente('Epaminondas')
filaHospital.print()
console.log(`Agora, ${filaHospital.olharFrente()} é o próximo.`)


console.log(`Vish! O Guilherme está passando mal!`)
console.log(`${filaHospital.removeAtras()} será o próximo, prioridade para quem está mal!`)