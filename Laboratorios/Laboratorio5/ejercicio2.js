var contador = 0;
var promedio = 0;
function contardatos(l){
    

    for(let i=0; i<l.length; i++){
        contador = contador + l[i];

    }
    promedio = (contador/l.length)
    return console.log("suma de datos: " + contador + ", " + "promedio: " + promedio);

}
