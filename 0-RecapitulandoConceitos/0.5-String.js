const output = document.querySelector('.output')

// Strings :
const facul = 'FATEC';
let nomes = 'Alex, João, Pedro'
let typho = 'Javascriot'

// Pegar letra com charAt
const ultimaLetra = facul.charAt(2)
// Concatenar
const gritar = facul.concat('!')
// trocar substring
typho = typho.replace('o','p')
// Separar string com split
const nomesListados = nomes.split(',')

output.innerHTML = gritar + '<br>' + ultimaLetra + '<br>' + nomesListados