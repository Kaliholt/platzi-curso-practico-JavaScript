// const precioOriginal = 120;
// const dscto = 18;
// const porcentajePrecioConDscto = 100 - dscto;
// const precioConDscto = (precioOriginal * porcentajePrecioConDscto) / 100;
// console.log({
//     precioOriginal,
//     dscto,
//     porcentajePrecioConDscto,
//     precioConDscto
// });

function calcularPrecioConDescuento(precio, dscto) {
    const precioConDscto = (Number(precio) * (100 - Number(dscto))) / 100;
    return precioConDscto;
}

function OnClickButtonPriceWithDiscount() {
    const inputPrice = document.getElementById("inputPrecio");
    const valuePrice = inputPrice.value;
    
    const inputDiscount = document.getElementById("inputDscto");
    const valueDiscount = inputDiscount.value;
    
    const priceWithDiscount = calcularPrecioConDescuento(valuePrice, valueDiscount);

    const resultPriceWithDiscount = document.getElementById("resultPriceWithDiscount");
    resultPriceWithDiscount.innerText = "El precio con descuento es $"+priceWithDiscount;
}