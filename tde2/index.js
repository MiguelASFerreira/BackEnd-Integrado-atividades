function Pares() {
    var x;
    for(x = 1;x<101;x++) {
        if (x % 2 == 0) {
            console.log(x, ". É par.")
        }
    }
}

function somaArray(numeros) {
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
      soma += numeros[i];
    }
    console.log("A soma é " ,soma);
  }
  


function removeNegativos(numeros) {
    const novoNumero = [];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] >= 0) {
            novoNumero.push(i);
        } 
    }
    console.log(novoNumero);
}

function multiNumber(numeros) {
    const novoNumero = [];
    for (let i = 0; i < numeros.length; i++) {
      valor = numeros[i] * 2;
      novoNumero.push(valor);
    }
    console.log(novoNumero);
  }


Pares();
somaArray( [2, 4, 6, 8] )
removeNegativos( [-1, 1, -2, 2, -3, 3] )
multiNumber([1,2,3,4,5])