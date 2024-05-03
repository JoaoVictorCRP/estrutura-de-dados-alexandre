function fatorial_normal(n){
    // Eis aqui uma função "tradicional" do fatorial, qual estamos acostumados. Não é mesmo?
    let res=1;
    for(let i=n;i>1;i--){
        res = res*i;
    };
    return res;
};
console.log(`O fatorial de 5 é ${fatorial_normal(5)}`);


// Vamos a recursividade!
function fat_recursivo(n){
    if(n==1){
        return n
    };
    return n * fat_recursivo(n-1)
};

console.log(`O Fatorial (recursivo) de 8 é ${fat_recursivo(8)}`)