document.getElementById("name").setAttribute("required","");
document.getElementById("lastname").setAttribute("required","");
document.getElementById("input-email").setAttribute("required","");
document.getElementById("input-password").setAttribute("required","");
document.getElementById("input-password").setAttribute("minlength","6");


//Name
function validateM(_evt){
    var name = document.getElementById("name").value;
    
    var nameArray= name.split("");
    var primeraLetra= nameArray[0];
    var mayuscula = primeraLetra.toUpperCase();
    var espacio= false;
    
    for (var i=1; i<nameArray.length; i++){
        if(espacio){
            mayuscula += nameArray[i].toUpperCase();
            espacio =false;
        }else
			mayuscula += nameArray[i];
			if(nameArray[i] ==" ")
			espacio = true;
					
			}
		document.getElementById("name").value= mayuscula;
}

function validateT(_evt){
	letra = window.event.keyCode;
	
	if((letra>=65 && letra<=90) || letra==8 || letra==32){
		
	}else{
		_evt.preventDefault();
	}
}

//lastname
function validado(_evt){
    var name = document.getElementById("lastname").value;
    
    var nameArray= name.split("");
    var primeraLetra= nameArray[0];
    var mayuscula = primeraLetra.toUpperCase();
    var espacio= false;
    
    for (var i=1; i<nameArray.length; i++){
        if(espacio){
            mayuscula += nameArray[i].toUpperCase();
            espacio =false;
        }else
			mayuscula += nameArray[i];
			if(nameArray[i] ==" ")
			espacio = true;
					
			}
		document.getElementById("lastname").value= mayuscula;
}

function validadoNumber(_evt){
	letra = window.event.keyCode;
	
	if((letra>=65 && letra<=90) || letra==8 || letra==32){
		
	}else{
		_evt.preventDefault();
	}
}

//Email

function validateForm(){
	var correo= document.getElementById("input-email").value;
	
	var expresion= /\w+@\w+\.+[a-z]/;
	
	if(!expresion.test(correo)){
		alert ("Email no válido");
	}else
		return false;
}

function validatePassword(_evt){
var valor = document.getElementById("input-password").value;
    
 if( valor==="123456" || valor==="098754" || valor==="password"){
      alert('Contraseña no válida');
      return false;
  }
}





