function go (){
     var usuario=document.getElementById("usuario").value; 
   var contraseña= document.getElementById("contraseña").value;
   
  
   
  
   
      if(usuario=='Carlos' && contraseña== '1234') {
       
     location="registro/registro.html";
      
      }
      
      else{
          alert("el usuario o la contraseña es incorrecta por favor vuelve a intentarlo");
          
      }
      }
      
