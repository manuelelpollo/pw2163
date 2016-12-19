
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
					$("#artInicio").show("slow");
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
	

	var teclaClave=function(tecla)
	{
		if(tecla.which == 13) //tecla enter
		{
			validaUsuario(); //funcion que valida usuario
		}
	}
	var consulta=function()
	{
		$("#artConsultaUsuario").show("slow");
		$("#artCambioUsuario").hide("slow");
		$("#artBajaUsuarios").hide("slow");
		$("#artAltaUsuarios").hide("slow");
		$("#artInicio").hide("slow");

	}
	$("#btnConsulta").on("click",consulta);
	var Alta=function()
	{
		$("#artConsultaUsuario").hide("slow");
		$("#artBajaUsuarios").hide("slow");
		$("#artAltaUsuarios").show("slow");
		$("#artCambioUsuario").hide("slow");
		$("#artInicio").hide("slow");

	}
	$("#btnAlta").on("click",Alta);
	var Baja=function()
	{
		$("#artConsultaUsuario").hide("slow");
		$("#artAltaUsuarios").hide("slow");
		$("#artBajaUsuarios").show("slow");
		$("#artCambioUsuario").hide("slow");
		$("#artInicio").hide("slow");

	}
	$("#btnBaja").on("click",Baja);
	var Cambio=function()
	{
		$("#artConsultaUsuario").hide("slow");
		$("#artBajaUsuarios").hide("slow");
		$("#artBajaUsuarios").hide("slow");
		$("#artAltaUsuarios").hide("slow");
		$("#artCambioUsuario").show("slow");
		$("#artInicio").hide("slow");
	}
	$("#btnCambio").on("click",Cambio);
	var inicio=function()
	{
		$("#artConsultaUsuario").hide("slow");
		$("#artBajaUsuarios").hide("slow");
		$("#artBajaUsuarios").hide("slow");
		$("#artAltaUsuarios").hide("slow");
		$("#artCambioUsuario").hide("slow");
		$("#artInicio").show("slow");

	}	
	$("#btnInicio").on("click",inicio);
	var guardaUsuario=function()
	{				

		//extraer los datos de los inputs en los html
		var usuario = $("#txtUsuarioAlta").val();
		var nombre = $("#txtNombreAlta").val();
		var clave = $("#txtClaveAlta").val();
		var tipo = $("#txtTipo").val();
		//preparar loss parametros para ajax
		var parametros ="opcion=guarda"+
						"&usuario="+usuario+
						"&nombre="+nombre+
						"&clave="+clave+
						"&tipo="+tipo+
						"&id="+Math.random();
						//validamos queno esten vacios
		if(usuario!="" && nombre!="" && clave!="" && tipo!="")
		{
		//hacemos la peticion remota
		
		$.ajax({
			// beforeSend:function(){
			// 	alert("entrando al ajax");
			// },
			cache:false,
			type:"POST", //metodo de envio
			dataType:"json", //que recibimos
			url:"php/utilerias.php",//hacia donde va el json
			data:parametros,  //que envio
			success:function(response){
				if(response.respuesta == true)
				{
					alert("Datos ingresados correctamente");
 				}
				else
				{
					alert("error al Ingresar usuario");
				}
				//si todo sale bien
			},
			error:function(xhr,ajaxOptions,thrownError){
					//Si todo sale mal
				}
		});
		

		}
		else
		{
			alert("DATOS OBLIGATORIOS");
		}
	}
	var bajaUsuario=function()
		{				

		//extraer los datos de los inputs en los html
		var usuario = $("#txtUsuarioBaja").val();
		
		//preparar loss parametros para ajax
		var parametros ="opcion=baja"+
						"&usuario="+usuario+
						"&id="+Math.random();
						//validamos queno esten vacios
		if(usuario!="")
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
					alert("usuario eliminado");
				}
				else
				{
					alert("error al eliminar el usuario");
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
			alert("USUARIO ES OBLIGATORIO");
		}
	}

	var usuarioCambio=function()
		{				

		//extraer los datos de los inputs en los html
		var usuarioamodificar = $("#txtUsuarioamodificar").val();
		var usuarioV = $("#txtUsuarioCambio").val();
		var nombreV = $("#txtNombreCambio").val();
		var claveV = $("#txtClaveCambio").val();
		var tipoV = $("#txtTipoCambio").val();
		
		//preparar loss parametros para ajax
		var parametros ="opcion=cambio"+
						"&usuarioamodificar="+usuarioamodificar+
						"&usuario="+usuarioV+
						"&nombre="+nombreV+
						"&clave="+claveV+
						"&tipo="+tipoV+
						"&id="+Math.random();
						//validamos queno esten vacios
		if(usuarioamodificar!="" && usuarioV!="" && nombreV!="" && claveV!="" && tipoV!="")
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
					alert("usuario modificado con exito");
				}
				else
				{
					alert("error al modificar el usuario");
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
			alert("TODOS LOS CAMPOS SON OBLIGATORIOS");
		}
	}

		var consultaUsuario=function()
		{
			//extraer los datos de los inputs en los html
		var usuario= $("#txtUsuarioConsulta").val();
		//preparar loss parametros para ajax
		var parametros ="opcion=consulta"+
						"&usuario="+usuario+
						"&id="+Math.random();
						//validamos queno esten vacios
		if(usuario!="")
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
					alert("usuario consultado exitosamente");
					$("#tabla").html(response.tabla);
				}
				else
				{
					alert("error al buscar usuario");
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
			alert("USUARIO OBLIGATORIO");
		}

		}
	//keypress se ejecuta cuando presiono una tecla sobre el input
	$("#txtClave").on("keypress",teclaClave);
	$("#btnGuardaUsuario").on("click",guardaUsuario);
	$("#btnValidaUsuario").on("click",validaUsuario);
	$("#btnBajaUsuario").on("click",bajaUsuario);
	$("#btnGuardaUsuarioCambio").on("click",usuarioCambio);
	$("#btnConsultaUsuario").on("click",consultaUsuario);
	
	 
}
//evento inicial, prenderlo
$(document).on("ready",inicioUsuarios);














