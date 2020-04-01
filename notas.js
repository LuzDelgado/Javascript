var nota1 = 1;
var nota2 = 2;
var notas = ( nota1 + nota2 ) / 2
if (notas >=0  && notas <= 5.0) {
    console.log("Nota Definitiva => " + notas);
    if ( notas >= 0 && notas <= 2.0 ) {
        console.log("Pesimo");
    } else {
        if ( notas >= 2.1 && notas <= 2.9 ) {
            console.log("Insuficiente");
        } else {
            if ( notas >= 3.0 && notas <= 4.0 ) {  
                console.log("Aceptable");
            } else {
                console.log("Bueno");     
            }
        }
    }
} else {
    console.log("Error en alguna nota..verifique")
}
