let listaDeNombres = [];


//fucion para guardar los nombres ingresados por el usuario al arrays listaDeNombres
function guardarNombreLista(){

    let nombreIngresado = document.getElementById('amigo').value.trim();
    if(nombreIngresado != ""){

        listaDeNombres.push(nombreIngresado);
        document.getElementById("listaAmigos").innerHTML;
        document.getElementById("amigo").value = "";
        actualizarLista();
      
        console.log(listaDeNombres);

    }else{

        alert("ingrese un numero valido porfavor");

    }
}


function actualizarLista(){

    let listaModificada = document.getElementById("listaAmigos");
    listaModificada.innerHTML= "";

    for (let i = 0; i < listaDeNombres.length; i++) {
        
        //creamos el li para colocar nuestros nombres uno por uno 
        let li = document.createElement("li");
        //se ingresa el nombre dentro de li osea que se ingresa en nuesto li, el nombre perteciente al arrays
        li.textContent = listaDeNombres[i];
        //se ingresa ya el cambio del los datos al formato HTML en listaAmigos ya que la listaModifcada ya tiene los valores HTML
        listaModificada.appendChild(li); 

    }
}

function sortearAmigo(){

    const indice = Math.floor(Math.random()*listaDeNombres.length);
    const nombreElegido=listaDeNombres[indice];

    document.getElementById("resultado").textContent = `El amigo secreto es: ${nombreElegido}`;


}     

