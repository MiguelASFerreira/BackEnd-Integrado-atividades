var num1;
var num2;

function soma(n1, n2) {
    var soma = n1 + n2;
    if (soma%2 == 0) {
        console.log("Soma:", soma, ". É par");
    } else {
        console.log("Soma:", soma, ". É ímpar");
    }
}

function subtrair(n1, n2) {
    var sub = n1 - n2;
    if (sub%2 == 0) {
        console.log("Subtração:", sub, ". É par");
    } else {
        console.log("Subtração:", sub, ". É ímpar");
    }
}

function dividir(n1, n2) {
    var div = n1 / n2;
    if (div%2 == 0) {
        console.log("Divisão:", div, ". É par");
    } else {
        console.log("Divisão:", div, ". É ímpar");
    }
}

function multi(n1, n2) {
    var multi = n1 / n2;
    if (multi%2 == 0) {
        console.log("Multiplicação:", multi, ". É par");
    } else {
        console.log("Multiplicação:", multi, ". É ímpar");
    }
}

soma(5,5);
subtrair(10,5);
dividir(5,5);
multi(5,5);