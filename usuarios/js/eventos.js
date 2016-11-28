
var inicioUsuarios=function()
{
	var btnValidaUsuario=function()
	{
		//extraer los datos de los inputs en los html
		var usuario = $("#txtUsuario").val();
		var clave = $("#txtClave").val();
		//preparar loss parametros para ajax
		var parametros ="opcion=valida"+
						"&usuario="+usuario+
						"&clave="+clave+
						"&id="+Math.random();
		//hacemos la peticion remota
		$.ajax({
			cache:false,
			type:"POST", //metodo de envio
			dataType:"json", //que recibimos
			url:"php/utilerias.php",//hacia donde va el json
			data:parametros,  //que envio
			success: function(response){
				//si todo sale bien
			}
			error: function(xhr,ajaxOptions,thrownError){
				//si todo sale mal
			}
		});
		//validamos queno esten vacios
		if(usuario!="" && clave!="")
		{

		}
		else
		{
			alert("USUARIO Y CLAVE SON OBLIGATORIAS");
		}
	}
	$("#btnValidaUsuario").on("click")
}
//evento inicial, prenderlo
$(document).on("ready",inicioUsuarios);