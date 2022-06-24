//HELPERS
const inputResult = document.getElementById("result");
const inputLista = document.getElementById("lista");

const salariosCol = colombia.map(
    function(persona) {
        return persona.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function(salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

function esPar(num) {
    return (num % 2 === 0);
}

//MEDIANA GENERAL DE SALARIOS
function calcularMedianaSalarios(lista) {
    const mediaLista = parseInt(lista.length / 2);

    if(esPar(lista.length)) {
        const element1 = lista[mediaLista];
        const element2 = lista[mediaLista - 1];

        mediana = (element1 + element2) / 2;
    } else {
        mediana = lista[mediaLista];
    }

    return mediana;
} 

const medianaGeneralCol = calcularMedianaSalarios(salariosColSorted);
function onClickMedianaSalarios() {
    inputResult.innerText = "La mediana general de salario es comobia es  pesos colombianos";
}

//MEDIANA DEL TOP 10 DE SALARIOS

// const indiceSalarioLimitTop10 = (
//     salariosColSorted.length - (parseInt(salariosColSorted.length * 0.1))
// );
// const salarioLimitTop10 = salariosColSorted[indiceSalarioLimitTop10];

// const salariosTop10Col = salariosColSorted.filter(
//     function(salarios) {
//         return salarios >= salarioLimitTop10;
//     }
// );
const spliceStart = parseInt(salariosColSorted.length * 0.9);
const spliceCount = salariosColSorted - spliceStart;
const salariosTop10Col = salariosColSorted.splice(spliceStart, spliceCount);

const medianaTop10Col = calcularMedianaSalarios(salariosTop10Col);

console.log({
    medianaGeneralCol,
    medianaTop10Col
});
