function parImpar(variavel) {
    if (variavel%2 == 0) {
        console.log("É par\n--------------");
    } else {
        console.log("É ímpar\n--------------");
    }
}

function soma(n1, n2) {
    var soma = n1 + n2;
    console.log("Soma:",soma);
    parImpar(soma);
}

function subtrair(n1, n2) {
    var sub = n1 - n2;
    console.log("Subtração:",sub);
    parImpar(sub);
}

function dividir(n1, n2) {
    var div = n1 / n2;
    console.log("Divisão:",div);
    parImpar(div);
}

function multi(n1, n2) {
    var multi = n1 / n2;
    console.log("Multiplicação:",multi);
    parImpar(multi);
}

soma(5,5);
subtrair(10,5);
dividir(5,5);
multi(5,5);