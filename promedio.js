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

const lista1 = [14, 24, 9, 2, 5, 2, 6, 9 , 1, 2];

const lista1Count = {};

lista1.map( 
    function(elemento) {
        if(lista1Count[elemento]) {
            lista1Count[elemento] += 1;
        } else {
            lista1Count[elemento] = 1; 
        }
    }
);

const moda = 

function numerosIguales(list) {    
    
}