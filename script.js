function validaForm(){
    // Campos de texto
    if($("#nombre").val() == ""){
        alert("El campo Nombre no puede estar vacío.");
        $("#nombre").focus();       // Esta función coloca el foco de escritura del usuario en el campo Nombre directamente.
        return false;
    }
    if($("#apellidos").val() == ""){
        alert("El campo Apellidos no puede estar vacío.");
        $("#apellidos").focus();
        return false;
    }
    if($("#direccion").val() == ""){
        alert("El campo Dirección no puede estar vacío.");
        $("#direccion").focus();
        return false;
    }

    // date
    if(!$("#nacimiento").val()== ""){
      alert("Debe confirmar su fecha de nacimiento.");
      $("#nacimiento").focus();
        return false;
    }

    return true; // Si todo está correcto
}

$(document).ready( function() {   
    $("#botonenviar").click( function() {     
        if(validaForm()){                               
            $.post("enviar.php",$("#formdata").serialize(),function(res){
                $("#formulario").fadeOut("slow");   
                if(res == 1){
                    $("#exito").delay(500).fadeIn("slow");     
                    $("#fracaso").delay(500).fadeIn("slow");    
                }
            });
        }
    });    
});
