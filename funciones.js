"use strict";
function sumar() {
    var _a, _b;
    console.log("suma resultado");
    let elementoid = parseInt((_a = document.getElementById('n1')) === null || _a === void 0 ? void 0 : _a.value);
    console.log(elementoid);
    let elementoid2 = parseInt((_b = document.getElementById('n2')) === null || _b === void 0 ? void 0 : _b.value);
    console.log(elementoid2);
    alert('El resultado de la suma es ' + (elementoid + elementoid2));
    let elementoid3 = document.getElementById('res');
    console.log(elementoid3);
    let textoConcatenado = (elementoid + elementoid2);
    // Asignar el texto concatenado a elementoid3
    let textoString = String(textoConcatenado);
    elementoid3.value = textoString;
}
function restar() {
    var _a, _b;
    console.log("resta");
    let elementoid = parseInt((_a = document.getElementById('n1')) === null || _a === void 0 ? void 0 : _a.value);
    console.log(elementoid);
    let elementoid2 = parseInt((_b = document.getElementById('n2')) === null || _b === void 0 ? void 0 : _b.value);
    console.log(elementoid2);
    alert('El resultado de la resta es ' + (elementoid - elementoid2));
    let elementoid3 = document.getElementById('res');
    console.log(elementoid3);
    let textoConcatenado = (elementoid - elementoid2);
    // Asignar el texto concatenado a elementoid3
    let textoString = String(textoConcatenado);
    elementoid3.value = textoString;
}
function multiplicar() {
    var _a, _b;
    console.log("mult");
    let elementoid = parseInt((_a = document.getElementById('n1')) === null || _a === void 0 ? void 0 : _a.value);
    console.log(elementoid);
    let elementoid2 = parseInt((_b = document.getElementById('n2')) === null || _b === void 0 ? void 0 : _b.value);
    console.log(elementoid2);
    alert('El resultado de la multiplicación es ' + (elementoid * elementoid2));
    let elementoid3 = document.getElementById('res');
    console.log(elementoid3);
    let textoConcatenado = (elementoid * elementoid2);
    // Asignar el texto concatenado a elementoid3
    let textoString = String(textoConcatenado);
    elementoid3.value = textoString;
}
function dividir() {
    var _a, _b;
    console.log("division");
    let elementoid = parseInt((_a = document.getElementById('n1')) === null || _a === void 0 ? void 0 : _a.value);
    console.log(elementoid);
    let elementoid2 = parseInt((_b = document.getElementById('n2')) === null || _b === void 0 ? void 0 : _b.value);
    console.log(elementoid2);
    alert('El resultado de la división es ' + (elementoid / elementoid2));
    let elementoid3 = document.getElementById('res');
    console.log(elementoid3);
    let textoConcatenado = (elementoid / elementoid2);
    // Asignar el texto concatenado a elementoid3
    let textoString = String(textoConcatenado);
    elementoid3.value = textoString;
}
