function valida_envia(){

    const nombre = document.getElementById('name').value;
    const email = document.getElementById('correo').value;
    const mesaje = document.getElementById('mensaje').value;
       
    // validamos el nombre
     if(!(/\^[a-zA-Z ]\+$/.test(nombre))){
     alert("Tiene que escribir su nombre");
     return false;
     }
     //validamos el correo
     if(!(/\S+@\S+\.\S+/.test(email))){
     alert("Tiene que escribir su correo");
     return false;
    }
    //validamos el mensaje
    if (mesaje == null|| mesaje == "" || mesaje == "0" ){
        alert("Tiene que escribir algun mensaje");
        return false;
    }
     return true;
    }
    
    
    