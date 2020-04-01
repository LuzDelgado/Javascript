var smlv = 877803;
var precio = 200000;
var cantidad = 3;
var totalVenta = precio * cantidad;
if ( totalVenta > smlv ) {
    var descuento = totalVenta * 0.2;
} else {
    var descuento = totalVenta * 0.1;
}
var valorFinalVenta = totalVenta - descuento;
console.log("Total antes de decuento: " + totalVenta);
console.log("Valor del descuento: " + descuento);
console.log("Total a pagar: " + valorFinalVenta);
