'use strict'
function multipilcar(multiplicador , multiplicando) {
let suma = 0;
for (let i=0; i< multiplicador; i++) {
    suma = suma + multiplicando;
}
return suma;
}
let primerNumero= Number(prompt("Ingrese multiplicador"));
let segundoNumero=Number(prompt(" Ingrese multiplicando"));
let resultado=multipilcar(primerNumero, segundoNumero );
alert(resultado);