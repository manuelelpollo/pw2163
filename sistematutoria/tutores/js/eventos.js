

var inicioSesion = function()
{

	var validaUsuario = function()
	{

		//Extraer los datos de los input en el HTML
		var usuario = $("#txtUsuario").val();
		var clave   = $("#txtClave").val();
		//Preparar los parámetros para AJAX
		var parametros = "opcion=valida"+
		                 "&usuario="+usuario+
		                 "&clave="+clave+
		                 "&id="+Math.random();
		
		//Validamos que no esten vacíos
		if(usuario!="" && clave!="")
		{
			//Hacemos la petición remota
			$.ajax({
				cache:false,
				type:"POST",
				dataType:"json",
				url: "php/utilerias.php",
				data:parametros,
				success: function(response){
					if(response.respuesta == true)
					{    
						$("#entradaUsuario").hide("slow");
						$("nav").show("slow");

 					}
					else
					{
						alert("Datos incorrectos :(");
					}
				},
				error: function(xhr,ajaxOptions,thrownError){
					//Si todo sale mal
				}
			});
		}
		else
		{
			alert("Usuario y clave son obligatoriosssssss");
		}
	}

	var Opcion=function()
	{
		$("#btnTutor").show("slow");
		$("#btnAlumno").show("slow");

		$("#btnAlumnoBaja").hide("slow");
		$("#btnTutorBaja").hide("slow");
		$("#btnTutorEdita").hide("slow");
		$("#btnAlumnoEdita").hide("slow");
		$("#btnTutorConsulta").hide("slow");
		$("#btnAlumnoConsulta").hide("slow");

		$("#artBajaTutor").hide("slow");
		$("#artBajaAlumno").hide("slow");
		$("#artEditaAlumno").hide("slow");
		$("#artEditaTutor").hide("slow");

		$("#artConsultas").hide("slow");
		$("#artConsultasA").hide();
		$("#artConsultas").hide();




	}
	var agregarTutor=function()
	{ 
		$("#artAltaTutores").show("slow");

		$("#artAltaAlumno").hide("slow");
		$("#artBajaTutor").hide("slow");
		$("#artBajaAlumno").hide("slow");
		$("#artEditaAlumno").hide("slow");
		$("#artEditaTutor").hide("slow");




		$("#btnBajaTutor").hide();
		$("#btnCambioTutor").hide();

		$("#btnTutorBaja").hide("slow");
		$("#btnAlumnoBaja").hide("slow");
		$("#btnTutorConsulta").hide("slow");
		$("#btnAlumnoConsulta").hide("slow");

		$("#artConsultas").hide("slow");



	}
	var agregarAlumno=function()
	{
		$("#btnTutorBaja").hide("slow");
		$("#btnAlumnoBaja").hide("slow");
		$("#btnTutorConsulta").hide("slow");
		$("#btnAlumnoConsulta").hide("slow");


		$("#artAltaTutores").hide("slow");
		$("#artAltaAlumno").show("slow");
		$("#artBajaTutor").hide("slow");
		$("#artBajaAlumno").hide("slow");
		$("#artEditaAlumno").hide("slow");
		$("#artEditaTutor").hide("slow");





		$("#btnBajaAlumno").hide();
		$("#btnCambioAlumno").hide();

		$("#artConsultas").hide("slow");

		
	}


	var guardaTutor=function()
	{
		event.preventDefault();
		//Código para guardar usuario.
		var nombre=$("#nombreTutor").val();
		var appaterno=$("#appTutor").val();
		var apmaterno=$("#apmTutor").val();
		var carrera=$("#carreraTutor").val();
		var	aula=$("#aulas").val();
		var horario=$("#horarios").val();
		var dia=$("#dias").val();
		var periodo=$("#periodo").val();
		if(nombre!="" && appaterno!="" && apmaterno!="" && carrera!="" && aula!="" && horario!="" && dia!="" && periodo!="")
			{
				//parametros para el ajax
				var parametros="opcion=guarda"+
								"&nombre="+nombre+
								"&appaterno="+appaterno+
								"&apmaterno="+apmaterno+
								"&carrera="+carrera+
								"&aula="+aula+
								"&horario="+horario+
								"&dia="+dia+
								"&periodo="+periodo+
								"&id="+Math.random();
					$.ajax({
						cache:false,
						type:"POST",
						dataType:"json",
						url:"php/utilerias.php",
						data:parametros,
						success:function(response){
						if(response.respuesta == true)
						{
							alert("Tutor registrado");
							$("#nombreTutor").val("");
							$("#appTutor").val("");
							$("#apmTutor").val("");
							$("#carreraTutor").val("");
							$("#aulas").val("");
							$("#horarios").val("");
							$("#dias").val("");
							$("#periodo").val("");
							
						}
						else
							alert("tutr no registrado");
						},
					error:function(xhr,ajaxOptions,thrownError){
					console.log("No se pudo conectar al servidor");
						}
			         });
			}
		else 
		{
			alert("TODOS LOS CAMPOS SON OBLIGATORIOS");
		}
	}
	var guardaAlumno=function()
	{
		event.preventDefault();
		//Código para guardar usuario.
		var nombre=$("#nombreAlumno").val();
		var appaterno=$("#appAlumno").val();
		var apmaterno=$("#apmAlumno").val();
		var nocontrol=$("#noControl").val();
		var carrera=$("#carreraAlumno").val();
		var	semestre=$("#semestreAlumno").val();
		if(nombre!="" && appaterno!="" && apmaterno!="" && nocontrol!="" && carrera!="" && semestre!="")
			{
				//parametros para el ajax
				var parametros="opcion=guardaAlumno"+
								"&nombre="+nombre+
								"&appaterno="+appaterno+
								"&apmaterno="+apmaterno+
								"&nocontrol="+nocontrol+
								"&carrera="+carrera+
								"&semestre="+semestre+
								"&id="+Math.random();
					$.ajax({
						cache:false,
						type:"POST",
						dataType:"json",
						url:"php/utilerias.php",
						data:parametros,
						success:function(response){
						if(response.respuesta == true)
						{
							alert("Alumno registrado");
							$("#nombreAlumno").val("");
							$("#appAlumno").val("");
							$("#apmAlumno").val("");
							$("#noControl").val("");
							$("#carreraAlumno").val("");
							$("#semestreAlumno").val("");	
						}
						else
							alert("Usuario no registrado y/o duplicado");
						},
					error:function(xhr,ajaxOptions,thrownError){
					console.log("No se pudo conectar al servidor");
						}
			         });
			}
		else 
		{
			alert("TODOS LOS CAMPOS SON OBLIGATORIOS");
		}
	}
	var baja=function()
	{
		$("#btnTutorBaja").show("slow");
		$("#btnAlumnoBaja").show("slow");

	
		$("#btnTutor").hide("slow");
		$("#btnAlumno").hide("slow");
		$("#btnTutorEdita").hide("slow");
		$("#btnAlumnoEdita").hide("slow");
		$("#btnTutorConsulta").hide("slow");
		$("#btnAlumnoConsulta").hide("slow");

		$("#artAltaTutores").hide("slow");
		$("#artAltaAlumno").hide("slow");
		$("#artBajaTutor").hide("slow");
		$("#artBajaAlumno").hide("slow");
		$("#artEditaAlumno").hide("slow");
		$("#artEditaTutor").hide("slow");
        $("#artConsultasA").hide();
		$("#artConsultas").hide();
		$("#artConsultas").hide("slow");






	}

	var bajaTutor=function()
	{
		$("#artBajaTutor").show("slow");
		$("#btnBajaTutor").show("slow");
		$("#artBajaAlumno").hide("slow");
		$("#artEditaTutor").hide("slow");

		$("#artConsultas").hide("slow");



	}

	var buscaTutor=function(tecla)
	{
		if(tecla.which == 13) //Enter
		{
			var nombre = $("#nombreTutorB").val();
			var parametros = "opcion=busca"+
							 "&nombre="+nombre+
							 "&id="+Math.random();
			$.ajax({
				cache:false,
				type:"POST",
				dataType:"json",
				url:"php/utilerias.php",
				data:parametros,
				success:function(response){
					if(response.respuesta == true)
					{
						// $("#nombreTutorB").val(response.nombre);
						$("#appTutorB").val(response.appaterno);
						$("#apmTutorB").val(response.apmaterno);
						$("#carreraTutorB").val(response.carrera);
						$("#aulasB").val(response.aulas);
						$("#horariosB").val(response.horario);
						$("#diasB").val(response.dias);
						$("#periodoB").val(response.periodo);
					}
					else
					{
						alert("TUTOR no encontrado");
					}

				},
				error:function(xhr,ajaxOptions,thrownError){
					console.log("Fallo en el servidor");
				}
			});
		}
	}
	var eliminaTutor=function()
	
		{
		event.preventDefault();
		//Código para guardar usuario.
		//Recuperamos los valores del formulario y los
		//ponemos en variables locales.
		var nombre = $("#nombreTutorB").val(); 
		if(nombre!="")
		{
			//Parámetros para el ajax
			var parametros = "opcion=baja"+
							 "&nombre="+nombre+							
							 "&id="+Math.random();
			$.ajax({
				cache:false,
				type:"POST",
				dataType:"json",
				url:"php/utilerias.php",
				data:parametros,
				success:function(response){
					if(response.respuesta == true)
					{
						alert("Tutor dado de baja");
						 
							$("#nombreTutorB").val("");
							$("#appTutorB").val("");
							$("#apmTutorB").val("");
							$("#carreraTutorB").val("");
							$("#aulasB").val("");
							$("#horariosB").val("");
							$("#diasB").val("");
							$("#periodoB").val(""); 
					}
					else
						alert("Usuario no se pudo dar de baja");
				},
				error:function(xhr,ajaxOptions,thrownError){
					console.log("No se pudo conectar al servidor");
				}
			});
		}
		else
			alert("Todos los campos son obligatorios");
	}
	

	var bajaAlumno=function()
	{
		$("#artBajaAlumno").show("slow");
		$("#artBajaTutor").hide("slow");
		$("#artEditaAlumno").hide("slow");
		$("#artEditaTutor").hide("slow");

		$("#artConsultas").hide("slow");




	}
	var buscaAlumno=function(tecla)
	{
		if(tecla.which == 13) //Enter
		{
			var nombre = $("#nombreAlumnoB").val();
			var parametros = "opcion=buscaA"+
							 "&nombre="+nombre+ 
							 "&id="+Math.random();
			$.ajax({
				cache:false,
				type:"POST",
				dataType:"json",
				url:"php/utilerias.php",
				data:parametros,
				success:function(response){
					if(response.respuesta == true)
					{
						// $("#nombreTutorB").val(response.nombre);
						$("#appAlumnoB").val(response.appaterno);
						$("#apmAlumnoB").val(response.apmaterno);
						$("#noControlB").val(response.numcontrol);
						$("#carreraAlumnoB").val(response.carrera);
						$("#semestreAlumnoB").val(response.semestre);
						
					}
					else
					{
						alert("Alumno no encontrado");
					}

				},
				error:function(xhr,ajaxOptions,thrownError){
					console.log("Fallo en el servidor");
				}
			});
		}
	}
	var eliminaAlumno=function()
	{
		event.preventDefault();
		//Código para guardar usuario.
		//Recuperamos los valores del formulario y los
		//ponemos en variables locales.
		var nombre = $("#nombreAlumnoB").val(); 
		if(nombre!="")
		{
			//Parámetros para el ajax
			var parametros = "opcion=eliminA"+
							 "&nombre="+nombre+							
							 "&id="+Math.random();
			$.ajax({
				cache:false,
				type:"POST",
				dataType:"json",
				url:"php/utilerias.php",
				data:parametros,
				success:function(response){
					if(response.respuesta == true)
					{
						alert("Alumno dado de baja");
						 
							$("#nombreAlumnoB").val("");
							$("#appAlumnoB").val("");
							$("#apmAlumnoB").val("");
							$("#noControlB").val("");
							$("#carreraAlumnoB").val("");
							$("#semestreAlumnoB").val("");
							
					}
					else
						alert("Alumno no se pudo dar de baja");
				},
				error:function(xhr,ajaxOptions,thrownError){
					console.log("No se pudo conectar al servidor");
				}
			});
		}
		else
			alert("Todos los campos son obligatorios");

	}
	var cambio=function()
	{
		$("#btnTutorEdita").show("slow");
		$("#btnAlumnoEdita").show("slow");

		$("#btnTutor").hide("slow");
		$("#btnAlumno").hide("slow");
		$("#btnTutorBaja").hide("slow");
		$("#btnAlumnoBaja").hide("slow");
		$("#btnTutorConsulta").hide("slow");
		$("#btnAlumnoConsulta").hide("slow");


		$("#artAltaTutores").hide("slow");
		$("#artAltaAlumno").hide("slow");
		$("#artBajaTutor").hide("slow");
		$("#artBajaAlumno").hide("slow");
		$("#artEditaAlumno").hide("slow");
		$("#artEditaTutor").hide("slow");
		$("#artConsultasA").hide();
		$("#artConsultas").hide();
		$("#artConsultas").hide("slow");




	}
	var entra=function(tecla)
	{
		if(tecla.which == 13) //Tecla enter.
		{
			validaUsuario(); //Función que valida al usuario.
		}	
	}
	var editaTutor=function()
	{
		
		$("#artEditaTutor").show("slow");

	}
	var buscaTutorE=function(tecla)
	{
		if(tecla.which == 13) //Enter
		{
			var nombre = $("#nombreTutorE").val();
			var parametros = "opcion=busca"+
							 "&nombre="+nombre+
							 "&id="+Math.random();
			$.ajax({
				cache:false,
				type:"POST",
				dataType:"json",
				url:"php/utilerias.php",
				data:parametros,
				success:function(response){
					if(response.respuesta == true)
					{
						// $("#nombreTutorB").val(response.nombre);
						$("#appTutorE").val(response.appaterno);
						$("#apmTutorE").val(response.apmaterno);
						$("#carreraTutorE").val(response.carrera);
						$("#aulasE").val(response.aulas);
						$("#horariosE").val(response.horario);
						$("#diasE").val(response.dias);
						$("#periodoE").val(response.periodo);
					}
					else
					{
						alert("TUTOR no encontrado");
					}

				},
				error:function(xhr,ajaxOptions,thrownError){
					console.log("Fallo en el servidor");
				}
			});
		}
	}
	var guardaTutorE=function()
	{
		event.preventDefault();
		//Código para guardar usuario.
		var nombre=$("#nombreTutorE").val();
		var appaterno=$("#appTutorE").val();
		var apmaterno=$("#apmTutorE").val();
		var carrera=$("#carreraTutorE").val();
		var	aula=$("#aulasE").val();
		var horario=$("#horariosE").val();
		var dia=$("#diasE").val();
		var periodo=$("#periodoE").val();
		if(nombre!="" && appaterno!="" && apmaterno!="" && carrera!="" && aula!="" && horario!="" && dia!="" && periodo!="")
			{
				//parametros para el ajax
				var parametros="opcion=actualizaT"+
								"&nombre="+nombre+
								"&appaterno="+appaterno+
								"&apmaterno="+apmaterno+
								"&carrera="+carrera+
								"&aula="+aula+
								"&horario="+horario+
								"&dia="+dia+
								"&periodo="+periodo+
								"&id="+Math.random();
					$.ajax({
						cache:false,
						type:"POST",
						dataType:"json",
						url:"php/utilerias.php",
						data:parametros,
						success:function(response){
						if(response.respuesta == true)
						{
							alert("Tutor actualizado");
							$("#nombreTutorE").val("");
							$("#appTutorE").val("");
							$("#apmTutorE").val("");
							$("#carreraTutorE").val("");
							$("#aulasE").val("");
							$("#horariosE").val("");
							$("#diasE").val("");
							$("#periodoE").val("");
							
						}
						else
							alert("Tutor no Actualizado");
						},
					error:function(xhr,ajaxOptions,thrownError){
					console.log("No se pudo conectar al servidor");
						}
			         });
			}
		else 
		{
			alert("TODOS LOS CAMPOS SON OBLIGATORIOS");
		}
	}
	var editaAlumno=function()
	{
		$("#artEditaAlumno").show("slow");
		$("#artEditaTutor").hide("slow");
	}

	var guardaAlumnoE=function()
	{
		event.preventDefault();
		//Código para guardar usuario.
		var nombre=$("#nombreAlumnoE").val();
		var appaterno=$("#appAlumnoE").val();
		var apmaterno=$("#apmAlumnoE").val();
		var nocontrol=$("#noControlE").val();
		var carrera=$("#carreraAlumnoE").val();
		var	semestre=$("#semestreAlumnoE").val();
		if(nombre!="" && appaterno!="" && apmaterno!="" && nocontrol!="" && carrera!="" && semestre!="")
			{
				//parametros para el ajax
				var parametros="opcion=actualizaA"+
								"&nombre="+nombre+
								"&appaterno="+appaterno+
								"&apmaterno="+apmaterno+
								"&nocontrol="+nocontrol+
								"&carrera="+carrera+
								"&semestre="+semestre+
								"&id="+Math.random();
					$.ajax({
						cache:false,
						type:"POST",
						dataType:"json",
						url:"php/utilerias.php",
						data:parametros,
						success:function(response){
						if(response.respuesta == true)
						{
							alert("Alumno actualizado");
							$("#nombreAlumnoE").val("");
							$("#appAlumnoE").val("");
							$("#apmAlumnoE").val("");
							$("#noControlE").val("");
							$("#carreraAlumnoE").val("");
							$("#semestreAlumnoE").val("");	
						}
						else
							alert("Usuario no registrado y/o duplicado");
						},
					error:function(xhr,ajaxOptions,thrownError){
					console.log("No se pudo conectar al servidor");
						}
			         });
			}
		else 
		{
			alert("TODOS LOS CAMPOS SON OBLIGATORIOS");
		}

	}
	var buscaAlumnoE=function(tecla)
	{
		if(tecla.which == 13) //Enter
		{
			var nombre = $("#nombreAlumnoE").val();
			var parametros = "opcion=buscaA"+
							 "&nombre="+nombre+
							 "&id="+Math.random();
			$.ajax({
				cache:false,
				type:"POST",
				dataType:"json",
				url:"php/utilerias.php",
				data:parametros,
				success:function(response){
					if(response.respuesta == true)
					{
						// $("#nombreTutorB").val(response.nombre);
						$("#appAlumnoE").val(response.appaterno);
						$("#apmAlumnoE").val(response.apmaterno);
						$("#noControlE").val(response.numcontrol);
						$("#carreraAlumnoE").val(response.carrera);
						$("#semestreAlumnoE").val(response.semestre);
						
					}
					else
					{
						alert("Alumno no encontrado");
					}

				},
				error:function(xhr,ajaxOptions,thrownError){
					console.log("Fallo en el servidor");
				}
			});
		}
	}
	var consulta=function()
	{
		
        $("#btnTutorConsulta").show("slow");
		$("#btnAlumnoConsulta").show("slow");

		$("#btnAlumnoBaja").hide("slow");
		$("#btnTutorBaja").hide("slow");
		$("#btnTutorEdita").hide("slow");
		$("#btnAlumnoEdita").hide("slow");
		$("#btnTutor").hide("slow");
		$("#btnAlumno").hide("slow");

		$("#artAltaTutores").hide("slow");
		$("#artAltaAlumno").hide("slow");
		$("#artBajaTutor").hide("slow");
		$("#artBajaAlumno").hide("slow");
		$("#artEditaAlumno").hide("slow");
		$("#artEditaTutor").hide("slow");

	}

	var consultaT=function()
	{
		var parametros="opcion=consultas"+
					   "&id="+Math.random();
		$.ajax({
			cache:false,
			type:"POST",
			dataType:"json",
			url:"php/utilerias.php",
			data:parametros,
			success:function(response){
				if(response.respuesta == true)
				{
					$("#artConsultas").show("slow");
					$("#artConsultasA").hide("slow");
					$("#tablaConsultas").html(response.renglones);
				}
			},
			error:function(xhr,ajaxOptions,thrownError){
					console.log("No se pudo conectar al servidor");
			}
		});
	}

	var consultaA=function()
	{
		var parametros="opcion=consultaA"+
					   "&id="+Math.random();
		$.ajax({
			cache:false,
			type:"POST",
			dataType:"json",
			url:"php/utilerias.php",
			data:parametros,
			success:function(response){
				if(response.respuesta == true)
				{
					$("#artConsultasA").show("slow");
					$("#artConsultas").hide("slow");

					$("#tablaConsultasA").html(response.renglones);
				}
			},
			error:function(xhr,ajaxOptions,thrownError){
					console.log("No se pudo conectar al servidor");
			}
		});
	}

	var muestra=function()
	{
		$("#artAsigna").show("slow");
	}
$("#txtClave").on("keypress",entra);
$("#btnTutor").on("click",agregarTutor);
$("#btnAlumno").on("click",agregarAlumno);
$("#btnIniciar").on("click",validaUsuario);
$("#btnAlta").on("click",Opcion);
$("#btnregistraTutor").on("click",guardaTutor);
$("#btnregistraAlumno").on("click",guardaAlumno);
$("#btnBaja").on("click", baja);
$("#btnTutorBaja").on("click",bajaTutor);
$("#nombreTutorB").on("keypress",buscaTutor);
$("#btnBajaTutor").on("click",eliminaTutor);
$("#btnAlumnoBaja").on("click",bajaAlumno);
$("#nombreAlumnoB").on("keypress",buscaAlumno);
$("#btnbajaAlumno").on("click",eliminaAlumno);
$("#btnEdita").on("click",cambio);
$("#btnTutorEdita").on("click",editaTutor);
$("#nombreTutorE").on("keypress",buscaTutorE);
$("#btnEditaTutor").on("click",guardaTutorE);
$("#btnAlumnoEdita").on("click",editaAlumno);
$("#btnEditaAlumno").on("click",guardaAlumnoE);
$("#nombreAlumnoE").on("keypress",buscaAlumnoE);
$("#btnConsulta").on("click",consulta);
$("#btnTutorConsulta").on("click",consultaT);
$("#btnAlumnoConsulta").on("click",consultaA);
$("#btnAsigna").on("click",muestra);
}

var cargarTuto = function(){
	$.ajax({
		cache : false,
		type : "POST",
		dataType : "JSON",
		url:"http://localhost/pw/sistematutoria/tutores/tutoweb/index.php/tutores/get",
		success:function(data){
			/*if(data.code!=0){
				alert("error");
			}else{*/
				var html = "";

				for(var i = 0; i<data.length; i++){
					html += '<option value="'+data[i].id+'">'+data[i].name+'</option>';
				}

				$('#selectTuto').html(html);
			//}
		},
		error:function(xhr,ajaxOptions,thrownError){
			console.log("Fallo en el servidor");
		}
	});
}

var cargarAlum = function(){
	$.ajax({
		cache : false,
		type : "POST",
		dataType : "JSON",
		url:"http://localhost/pw/sistematutoria/tutores/tutoweb/index.php/tutores/getA",
		success:function(data){
			/*if(data.code!=0){
				alert("error");
			}else{*/
				var html = "";

				for(var i = 0; i<data.length; i++){
					html += '<option value="'+data[i].id+'">'+data[i].name+'</option>';
				}

				$('#selectAlum').html(html);
			//}
		},
		error:function(xhr,ajaxOptions,thrownError){
			console.log("Fallo en el servidor");
		}
	});
}

var getfinal = function(){
	$.ajax({
		cache : false,
		type : "POST",
		dataType : "JSON",
		url:"http://localhost/pw/sistematutoria/tutores/tutoweb/index.php/tutores/getFinal",
		success:function(data){
			/*if(data.code!=0){
				alert("error");
			}else{*/
				var html = "";

				for(var i = 0; i<data.length; i++){
					html += '<tr><td>'+data[i].namea+'</td><td>'+data[i].namet+'</td><td>'+data[i].run+'</td></tr>';
				}

				$('#tableTuto').html(html);
			//}
		},
		error:function(xhr,ajaxOptions,thrownError){
			console.log("Fallo en el servidor");
		}
	});
}

var addTuto = function(){
	var formdata = new FormData();
	formdata.append("idtuto",$('#selectTuto').val());
	formdata.append("idalum",$('#selectAlum').val());
	$.ajax({
		cache : false,
		type : "POST",
		dataType : "JSON",
		url:"http://localhost/pw/sistematutoria/tutores/tutoweb/index.php/tutores/add",
		data : formdata,
        processData: false,
        contentType: false,
		success:function(data){
			alert("agregado");
			getfinal();
		},
		error:function(xhr,ajaxOptions,thrownError){
			console.log("Fallo en el servidor");
		}
	});
}

var btnAsignar = function(){
	$('#btnAsignarAlumno').off();
	$('#btnAsignarAlumno').on('click',function(){
		addTuto();
	$("#tablita").show("slow");
	});
}

//Evento inicial
$(document).on("ready",function(){
	inicioSesion();
	cargarTuto();
	cargarAlum();
	btnAsignar();
	getfinal();
});