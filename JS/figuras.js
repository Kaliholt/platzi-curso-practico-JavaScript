//Código del Cuadrado

console.group("Cuadrado");

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: "+ ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}
// const perimetroCuadrado = ladoCuadrado * 4;
// console.log("El perímetro del cuadrado es: "+ perimetroCuadrado + "cm");

function areaCuadrado(lado) {
    return Math.pow(lado,2);
}
// const areaCuadrado = ladoCuadrado * ladoCuadrado;
// console.log("El área del cuadrado es: "+ areaCuadrado + "cm^2");

console.groupEnd();


//Código del Triángulo

console.group("Triángulo")

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//     "Los lados del triángulo miden: "
//     + ladoTriangulo1 + "cm, "
//     + ladoTriangulo2 + "cm, "
//     + baseTriangulo + "cm"
//     );

function perimetroTriangulo(lado1, lado2, base) {
    const perimetro = lado1 * 1 + lado2 * 1 + base * 1;
    return perimetro;
}
// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log("El perímetro del triángulo es: "+ perimetroTriangulo + "cm");
function alturaTriangulo(lado1, lado2, base) {
    const semiperimetro = perimetroTriangulo(lado1, lado2, base) / 2;
    const operationInsideSQRT = (
        semiperimetro * (semiperimetro - base) * (semiperimetro - lado1) * (semiperimetro - lado2)
    );
    const altura = (2 / base) * Math.sqrt(operationInsideSQRT);
    return altura;
}

function areaTriangulo(lado1, lado2, base) {
    return (base * alturaTriangulo(lado1, lado2, base)) / 2;
}
// const alturaTriangulo = 5.5;
// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
// console.log("El área del triángulo es: "+ areaTriangulo + "cm^2");

console.groupEnd();


//Código del Círculo

console.group("Círculo")

// const radioCirculo = 4;
// console.log("El radio del circulo es: "+ radioCirculo +"cm");

function diametroCirculo(radio) {
    return radio * 2;
}
// const diametroCirculo = radioCirculo * 2;
// console.log("El diámetro del círculo es: "+ diametroCirculo +"cm");

const PI = Math.PI;
console.log("El valor de PI es: "+ PI);

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio)
    return diametro * PI;
}
// const perimetroCirculo = diametroCirculo * PI;
// console.log("El perímetro del círculo es: "+ perimetroCirculo + "cm");

function areaCirculo(radio) {
    return PI * Math.pow(radio, 2);
}
// const areaCirculo = radioCirculo * radioCirculo * PI;
// console.log("El área del circulo es: "+ areaCirculo + "cm^2");

console.groupEnd();

//INTEGRANDO JAVASCRIPT CON HTML 

// CUADRADO
function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputLadoCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado() {
    const input = document.getElementById("inputLadoCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}
// TRIANGULO
function calcularPerimetroTriangulo() {
    const inputLado1 = document.getElementById("inputLado1Triangulo");
    const inputLado2 = document.getElementById("inputLado2Triangulo");
    const inputBase = document.getElementById("inputBaseTriangulo");
    const valueLado1 = inputLado1.value;
    const valueLado2 = inputLado2.value;
    const valueBase = inputBase.value;
    const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase);
    alert(perimetro);
}
function calcularAreaTriangulo() {
    const inputLado1 = document.getElementById("inputLado1Triangulo");
    const inputLado2 = document.getElementById("inputLado2Triangulo");
    const inputBase = document.getElementById("inputBaseTriangulo");
    const valueLado1 = inputLado1.value;
    const valueLado2 = inputLado2.value;
    const valueBase = inputBase.value;
    const area = areaTriangulo(valueLado1, valueLado2, valueBase);
    alert(area);
}

// CIRCULO
function calcularPerimetroCirculo() {
    const input = document.getElementById("inputRadioCirculo");
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}
function calcularAreaCirculo() {
    const input = document.getElementById("inputRadioCirculo");
    const value = input.value;
    const area = areaCirculo(value);
    alert(area);
}