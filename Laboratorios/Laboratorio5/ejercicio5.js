contador = 0;
function palindromo(palabra){
    
    l = array.from(palabra);


    for(let i=0; i<l.length; i++){

        if(l[(l.length - 1) - i] = l[i]){
            contador = contador + i;
        }
        else{
            contador = contador;
        }

    }

    if(contador = l.length){
        return console.log("la palabra es palindromo");
    }
    else{
        return console.log("la palabra no es palindromo");
    }
}