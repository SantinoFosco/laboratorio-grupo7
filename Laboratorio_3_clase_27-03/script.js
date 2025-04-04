// script.js
let calculo = 0;
const primero = document.getElementById("primero");
const segundo = document.getElementById("segundo");
const botonSuma = document.getElementById("sumar");
const botonResta = document.getElementById("restar");
const botonMulti = document.getElementById("multiplicar");
const p = document.getElementById("calculo");

botonSuma.addEventListener("click", () => {
    calculo = parseInt(primero.value) + parseInt(segundo.value);
    p.innerText = calculo;
});

botonResta.addEventListener("click", () => {
    let a = parseInt(primero.value);
    let b = parseInt(segundo.value);
    p.innerText = restar(a, b);
});

botonMulti.addEventListener("click", () => {
    //calculo = parseInt(primero.value) * parseInt(segundo.value);
    const multiplicacion = (a, b) => a * b;
    p.innerText = multiplicacion(parseInt(primero.value), parseInt(segundo.value));
});

function restar(a, b) {
    return a - b;
}