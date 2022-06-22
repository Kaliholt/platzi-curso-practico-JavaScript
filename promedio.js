
const answer = document.getElementById("inputAnswer");

//PROMEDIO
function calcularMediaAritmetica(lista) {
    // let sumaLista = 0;
    // for(let i = 0; i < lista.length; i++) {
    //     sumaLista += lista[i];
    // }
    
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, valorActual) {
            return valorAcumulado + valorActual;
        }
    );
    
    const promedioLista = sumaLista / lista.length;    

    return promedioLista;
}

function onClickButtonMean() {
    const inputList = document.getElementById("inputLista");
    const valueList = inputList.value;

    const convertList = valueList.split(",").map(
        function(item){
            return parseInt(item);
        }
    );
    console.log([convertList]);

    const averageList = calcularMediaAritmetica(convertList);
    
    answer.innerText = "The average of the data is: " + averageList;
}


//MEDIANA

function esPar(cantidadElementos) {
    if(cantidadElementos % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
function ordenar(a, b) {
    return a - b;
}

function calcularMediana(lista) {
    lista.sort(ordenar);

    const mitadLista = parseInt(lista.length / 2);
    let mediana = 0; 
    
    if(esPar(lista.length)) {
        const elemento1 = lista[mitadLista - 1];
        const elemento2 = lista[mitadLista];
        const promedioMediana = calcularMediaAritmetica([elemento1, elemento2]);
        mediana = promedioMediana;
    } else {
        mediana = lista[mitadLista];
    }

    return mediana;
}

//MODA

function ordenarArray2D(itemA,itemB){
    return itemA[1] - itemB[1];
}

function calcularModa(lista) {

    const listaCount = {};

    lista.map(
        function(elemento){
            if(listaCount[elemento]) {
                listaCount[elemento] += 1;
            } else {
                listaCount[elemento] = 1;
            }
        }
    );

    const listaArray = Object.entries(listaCount).sort(ordenarArray2D);

    const moda = listaArray[listaArray.length - 1];

    return moda;
}
console.log("Hola a todos!!");