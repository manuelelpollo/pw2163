
var inicioUsuarios=function()
{
	var validaUsuario=function()
	{				

		//extraer los datos de los inputs en los html
		var usuario = $("#txtUsuario").val();
		var clave = $("#txtClave").val();
		//preparar loss parametros para ajax
		var parametros ="opcion=valida"+
						"&usuario="+usuario+
						"&clave="+clave+
						"&id="+Math.random();
						//validamos queno esten vacios
		if(usuario!="" && clave!="")
		{
		//hacemos la peticion remota
		$.ajax({
			cache:false,
			type:"POST", //metodo de envio
			dataType:"json", //que recibimos
			url:"php/utilerias.php",//hacia donde va el json
			data:parametros,  //que envio
			success: function(response){
				if(response.respuesta == true)
				{
					$("#entradaUsuario").hide("slow");
					$("nav").show("slow");
				}
				else
				{
					alert("Datos incorrectos: (");
				}
				//si todo sale bien
			},
			error: function(xhr,ajaxOptions,thrownError){
					//Si todo sale mal
				}
		});
		

		}
		else
		{
			alert("USUARIO Y CLAVE SON OBLIGATORIAS");
		}
	}
	
	$("#btnValidaUsuario").on("click",validaUsuario);

	var teclaClave=function(tecla)
	{
		if(tecla.which == 13) //tecla enter
		{
			validaUsuario(); //funcion que valida usuario
		}
	}
	var Alta=function()
	{
		$("#artAltaUsuarios").show("slow");
	}
	var GuardaUsuario()
	{
		
	}
	//keypress se ejecuta cuando presiono una tecla sobre el input
	$("#txtClave").on("keypress",teclaClave);
	$("#btnAlta").on("click",Alta);
	$("#btnGuardaUsuario").on("click",GuardaUsuario);
}
//evento inicial, prenderlo
$(document).on("ready",inicioUsuarios);














