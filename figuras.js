//Código del Triángulo

console.group("Cuadrado");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: "+ ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado es: "+ perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es: "+ areaCuadrado + "cm^2");

console.groupEnd();


//Código del Triángulo

console.group("Triángulo")

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log(
    "Los lados del triángulo miden: "
    + ladoTriangulo1 + "cm, "
    + ladoTriangulo2 + "cm, "
    + baseTriangulo + "cm"
    );

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perímetro del triángulo es: "+ perimetroTriangulo + "cm");

const alturaTriangulo = 5.5;
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El área del triángulo es: "+ areaTriangulo + "cm^2");

console.groupEnd();


//Código del Círculo

console.group("Triángulo")

const radioCirculo = 4;
console.log("El radio del circulo es: "+ radioCirculo +"cm");

const diametroCirculo = radioCirculo * 2;
console.log("El diámetro del círculo es: "+ diametroCirculo +"cm");

const PI = Math.PI;
console.log("El valor de PI es: "+ PI);

const perimetroCirculo = diametroCirculo * PI;
console.log("El perímetro del círculo es: "+ perimetroCirculo + "cm");

const areaCirculo = radioCirculo * radioCirculo * PI;
console.log("El área del circulo es: "+ areaCirculo + "cm^2");

console.groupEnd();