// Escribe tu código aquí.
//alert("Hola");

function ejercicioUno(palabra,array){
    let tamañoPalabra = palabra.length;
    const palabras = [];
    array.forEach(word => {
        if(tamañoPalabra < word.length){
            palabras.push(word);
        }
    });
    console.log(palabras);
}

ejercicioUno("Hola",["Mochila","si","no","flores"]);

