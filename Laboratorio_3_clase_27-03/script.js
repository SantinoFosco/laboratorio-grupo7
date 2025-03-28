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
    calculo = parseInt(primero.value) - parseInt(segundo.value);
    p.innerText = calculo;
});

botonMulti.addEventListener("click", () => {
    calculo = parseInt(primero.value) * parseInt(segundo.value);
    p.innerText = calculo;
});