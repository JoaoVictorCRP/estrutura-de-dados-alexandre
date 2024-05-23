function quickSort(vetor, ini = 0, fim = vetor.length-1){
    if(fim<=ini) return; // (1) - Caso base

    const pivot = fim; // (2)
    console.log(`o pivot é: ${pivot}`)
    let div = ini - 1; // (3)

    for(let i=ini; i<fim; i++){ // (4)
        if(vetor[pivot]>vetor[i]){
            div++ // se o número iterado é maior que o pivot, a div anda

            if(div !== i){ // Para que não troque por si mesmo.
                [vetor[i], vetor[div]] = [vetor[div], vetor[i]]
            };
        };
    };
    div++;
    if(vetor[div] > vetor[pivot] && div !== pivot){ //(5)
        [vetor[pivot], vetor[div]] = [vetor[div], vetor[pivot]] // Fará o pivot ir para o meio
    };

    // Após isso, do div pra frente serão os maiores que o pivot, do div pra trás serão os menores...

    // (6):
    quickSort(vetor, ini, div-1) // Menores que o pivot (esquerda)
    quickSort(vetor, div+1, fim) // Maiores que o pivot (direita)
};

const nums = [2,5,7,1,6,3,4]
// const nums = [3,4,2,1]

quickSort(nums)

console.log(nums)


/*                                  EXPLICAÇÃO DO GPT (RODAPÉ )

1 - Checagem inicial: if(fim<=ini) return;
Esta linha verifica se o índice final (fim) é menor ou igual ao índice inicial (ini). 
Se for verdade, o algoritmo retorna sem fazer nada. Isso serve como condição de parada da recursão, 
indicando que o subvetor tem tamanho zero ou um, e por definição já está ordenado.

2 - Escolha do pivot: const pivot = fim;
O pivot é um elemento do vetor que usamos como referência para dividir o vetor em dois subconjuntos: 
elementos menores que o pivot e elementos maiores que o pivot. 
Neste código, o pivot é sempre o último elemento do subvetor que estamos analisando.

3 - Inicialização do divisor (div): let div = ini - 1;
A variável div serve como um marcador para onde inserir o próximo elemento que é menor que o pivot. 
Começa de ini - 1 porque será incrementado antes de ser usado pela primeira vez.

4 - Particionamento:
O laço for(let i=ini; i<fim; i++) percorre os elementos do vetor, exceto o pivot.
Dentro do loop, a condição if(vetor[pivot]>vetor[i]) verifica se o elemento atual é menor que o pivot.
Se for, div é incrementado e, se necessário, o elemento na posição i é trocado com o elemento na posição div.
Isso garante que todos os elementos menores que o pivot sejam movidos para a frente do vetor.

5 - Posicionamento final do pivot:
Após o loop, div é incrementado para posicionar o pivot corretamente. 
A troca if(vetor[div] > vetor[pivot] && div !== pivot) assegura que o pivot seja colocado na posição correta, 
ou seja, todos à esquerda são menores e todos à direita são maiores que o pivot.

6 - Recursividade:
O vetor é então dividido em dois nas chamadas recursivas: quickSort(vetor, ini, div-1) e quickSort(vetor, div+1, fim). Isso ordena os subvetores à esquerda e à direita do pivot, respectivamente.
Em resumo, o Quicksort funciona selecionando um elemento como pivot, reorganizando o vetor de forma que todos os elementos menores que o pivot fiquem à esquerda e os maiores à direita, e então ordenando recursivamente as duas metades. Isso é repetido até que todo o vetor esteja ordenado.

*/