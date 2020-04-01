var smlv = 877803;
var precio =  300000;
var cantidad = 3;
var totalVenta = precio * cantidad;
var descuento = 0;
var descuento = totalVenta * 0.2;
if  ( totalVenta <= smlv )  {
    var descuento = 0;
}
var valorFinalVenta = totalVenta - descuento;
console.log("Total antes de decuento: " + totalVenta);
console.log("Valor del descuento: " + descuento);
console.log("Total a pagar: " + valorFinalVenta);
