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
    const precioConDscto = (Number(precio) * (100 - dscto)) / 100;
    return precioConDscto;
}

// function OnClickButtonDiscountedPrice() {
//     const inputPrice = document.getElementById("inputPriceProduct");
//     const valuePrice = inputPrice.value;
    
//     const inputCoupon = document.getElementById("inputCouponProduct");
//     const valueCoupon = inputCoupon.value;

//     let dscto = 0;
//     const inputError = document.getElementById("inputError");
//     switch(valueCoupon) {
//         case "FIRSTBUY": dscto = 15;break;
//         case "MEDIUMBUY": dscto = 25;break;
//         case "FULLBUY": dscto = 40;break;
//         default: dscto = 0 
//         inputError.innerText = "*The coupon is wrong*"; 
//     }
    
//     const discountedPrice = calcularPrecioConDescuento(valuePrice, dscto);

//     const resultDiscountedPrice = document.getElementById("resultDiscountedPriceProduct");
//     resultDiscountedPrice.innerText = "El precio con el "+dscto+"% descuento es $"+discountedPrice;
// }

const coupons = [{
    name: "FIRSTBUY",
    discount: 15
},
{
    name: "MEDIUMBUY",
    discount: 25
},
{
    name: "FULLBUY",
    discount: 40
}];

function OnClickButtonDiscountedPrice() {
    const inputPrice = document.getElementById("inputPriceProduct");
    const valuePrice = inputPrice.value;
    
    const inputCoupon = document.getElementById("inputCouponProduct");
    const valueCoupon = inputCoupon.value;
    
    //Validación del cupon
    const validationCoupon = function(coupons) {
        const validation = (valueCoupon === coupons.name);
        return validation;
    }
    const userCoupon = coupons.find(validationCoupon);
    if(!userCoupon) {
        alert("*the coupon "+valueCoupon+" is wrong*");
    } else {
        const dscto = userCoupon.discount;  
        const discountedPrice = calcularPrecioConDescuento(valuePrice, dscto);

        const resultDiscountedPrice = document.getElementById("resultDiscountedPriceProduct");
        resultDiscountedPrice.innerText = "El precio con el "+dscto+"% descuento es $"+discountedPrice;
    }
}