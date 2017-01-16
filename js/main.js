document.getElementById("name").setAttribute("required","");
document.getElementById("lastname").setAttribute("required","");
document.getElementById("input-email").setAttribute("required","");
document.getElementById("input-password").setAttribute("required","");
document.getElementById("input-password").SetAttribute("minlength","6");

function validateM(_evt){
    var name = document.getElementById("name").value;
    
    var nameArray= name.split("");
    var primeraLetra= nameArray[0];
    var mayuscula= primeraLetra.toUpperCase();
    var espacio= false;
    
    for (var i=1; i<nameArray.length; i++){
        if(espacio){
            mayuscula += nameArray[i].toUpperCase();
            espacio =false;
        }else
			mayuscula += nameArray[i];
			if(nameArray[i] =="")
			espacio = true;
					
			}
		document.getElementById("name").value= mayuscula;
}
    



//----function validateForm(){
//    var valor = document.getElementById("input-password").value;
    
  //  if( valor==="123456" || valor==="098754" || valor==="password"){
    //    alert('Contraseña no válida');
      //  return false;
   // }
//-- } ---//





