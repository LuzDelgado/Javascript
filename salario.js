var tothoras = 45;
var vlrhora  = 2000;
if ( tothoras > 40 ) {
    var normal = 40;
    var extras = tothoras - 40;
} else {
    var normal = tothoras ;
    var extras = 0;
}
var valextra = extras * ( vlrhora *  1.50 );
var totsalario = ( normal * vlrhora ) + valextra;
console.log("Extras " + valextra);
console.log("Total Devengado " + totsalario);