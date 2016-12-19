var jugador1;
var jugador2;
var puntos1;
var puntos2;
var partida;
var primercarta;
var segundacarta;
var imagenes = [
"imagenes/1.jpg",
"imagenes/2.jpg",
"imagenes/3.jpg",
"imagenes/4.jpg",
"imagenes/5.jpg",
"imagenes/6.jpg",
"imagenes/7.jpg",
"imagenes/8.jpg",
"imagenes/9.jpg",
"imagenes/10.jpg",
"imagenes/11.jpg",
"imagenes/12.jpg",
"imagenes/13.jpg",
"imagenes/14.jpg",
"imagenes/15.jpg",
"imagenes/16.jpg",
"imagenes/17.jpg",
"imagenes/18.jpg",
"imagenes/19.jpg",
"imagenes/20.jpg",
"imagenes/21.jpg",
"imagenes/22.jpg",
"imagenes/23.jpg",
"imagenes/24.jpg",
"imagenes/25.jpg",
"imagenes/26.jpg",
"imagenes/27.jpg",
"imagenes/28.jpg",
"imagenes/29.jpg",
"imagenes/30.jpg",
"imagenes/31.jpg",
"imagenes/32.jpg",
"imagenes/1.jpg",
"imagenes/2.jpg",
"imagenes/3.jpg",
"imagenes/4.jpg",
"imagenes/5.jpg",
"imagenes/6.jpg",
"imagenes/7.jpg",
"imagenes/8.jpg",
"imagenes/9.jpg",
"imagenes/10.jpg",
"imagenes/11.jpg",
"imagenes/12.jpg",
"imagenes/13.jpg",
"imagenes/14.jpg",
"imagenes/15.jpg",
"imagenes/16.jpg",
"imagenes/17.jpg",
"imagenes/18.jpg",
"imagenes/19.jpg",
"imagenes/20.jpg",
"imagenes/21.jpg",
"imagenes/22.jpg",
"imagenes/23.jpg",
"imagenes/24.jpg",
"imagenes/25.jpg",
"imagenes/26.jpg",
"imagenes/27.jpg",
"imagenes/28.jpg",
"imagenes/29.jpg",
"imagenes/30.jpg",
"imagenes/31.jpg",
"imagenes/32.jpg"
];

var iniciamemorama=function()
{
		var iniciarPartida=function()
	{
		$("#artCampo").show("slow");
		$("#nombrePartida").html(partida);
		$("#btnIniciaPartida").hide();
		imagenes=revuelve(imagenes);
		var i;
		var j=8;
		for (i = 0; i < 8; i++) {
			var fila=document.getElementById("tablero2").rows[i];
			for(j=0;j<8;j++){
				var actual=(i*8)+j;
				var img = document.createElement('img');
    			img.src = imagenes[actual];
    			img.className= "carta";
    			img.id="carta"+actual;
    			img.onClick="clickImagen()";
    			var x=fila.insertCell(-1);
    			x.appendChild(img);
			}
		}

	}

var clickImagen =function()
	{
		

		if($(this).css('opacity')!=1)
		{
			$(this).css('opacity', '1');
			if(primercarta==null)
			{
				primercarta=$(this).attr("id");
				
			}
			else
			{
				$(this).css('opacity', '1');
				segundacarta=$(this).attr("id");
				setTimeout(function(){
						comprobar(primercarta,segundacarta);
				}, 100);
			}
		}
		
		
	}
		
	
	function comprobar(item1, item2)
	{
		var c1= document.getElementById(item1).src;
		var c2= document.getElementById(item2).src;
		if(c1==c2)
		{

			alert("imagenes correctas. continue jugando");
			
		}
		else
		{ 
			
			document.getElementById(item1).style.opacity = 0;
			document.getElementById(item2).style.opacity = 0;
		}
		primercarta=null;
		segundacarta=null;
	}

	 var revuelve=function(array) 
	{
  		var currentIndex = array.length, temporaryValue, randomIndex;

		   
		  while (0 !== currentIndex) {

		     
		    randomIndex = Math.floor(Math.random() * currentIndex);
		    currentIndex -= 1;

		    
		    temporaryValue = array[currentIndex];
		    array[currentIndex] = array[randomIndex];
		    array[randomIndex] = temporaryValue;
  		}

  	return array;
	}

	var registrajugador=function()
	{
		var usuario = $("#nombrejugador").val();
		var clave = $("#contraseñajugador").val();
		var edad = $("#edad").val();
		var parametros = "opcion=registra"+
						 "&usuario="+usuario+
						 "&clave="+clave+
						 "&edad="+edad+
						 "&id="+Math.random();

		//validamos que no esten vacios
		if(usuario!="" && clave !="")
		{
			//Hacemos la peticion remota
		$.ajax({
			cache:false,
			type:"POST",
			dataType:"json",
			url:"php/utilerias.php",
			data:parametros,
			success:function(response){
				//si todo sale bien
				if(response.respuesta == true){
					alert("Datos Guardados");
					$("#nombrejugador").val("");
					$("#contraseñajugador").val("");
					$("#edad").val("");
				}else{
					alert("Fallo al guardar");
				}
			},
			error:function(xhr,ajaxOptions,thrownError){
				 
			}
		});
		}
		else
		{
			alert("Usuario y clave son obligatorios");
		}
	}

	var valida1=function()
	{
		var usuario = $("#nombrejugador1").val();
		var clave = $("#contraseñajugador1").val();
		 
		var parametros = "opcion=valida"+
						 "&usuario="+usuario+
						 "&clave="+clave+
						 "&id="+Math.random();

		//validamos que no esten vacios
		if(usuario!="" && clave !="")
		{
			//Hacemos la peticion remota
		$.ajax({
			cache:false,
			type:"POST",
			dataType:"json",
			url:"php/utilerias.php",
			data:parametros,
			success:function(response){
				//si todo sale bien
				if(response.respuesta == true){
					alert("VERIFICADO");

					$("#artJugar1").hide("slow");
					$("#artJugar2").show("slow");
					 
				}else{
					alert("Fallo al verificar");
				}
			},
			error:function(xhr,ajaxOptions,thrownError){
				
			}
		});
		}
		else
		{
			alert("Usuario y clave son obligatorios");
		}
	}



	var registro=function()
	{
		$("#artAltaJugadores").show("slow");
		$("#artJugar1").hide("slow");
		$("#presentacion").hide("slow");


	}
	var juega=function()
	{
		$("#artPartida").show("slow");
		$("#artJuega").show("slow");

		$("#artAltaJugadores").hide("slow");
		$("#presentacion").hide("slow");


	}
	var muestra1=function()
	{
		var nombrepartida = $("#nombrepartida").val();
		$("#artJugar1").show("slow");

		$("#artPartida").hide("slow");
		$("#presentacion").hide("slow");


	}
	var Presentacion=function()
	{
		$("#presentacion").show("slow");
	}
	$("#btnInicio").on("click",Presentacion);
	$("#btnPartida").on("click",muestra1);
	$("#btnJuega").on("click",juega);
	$("#btnAlta").on("click",registro);
	$("#tablero2").on("click","img",clickImagen);
    $("#btnIniciaPartida").on("click",iniciarPartida);
    $("#btnregistra").on("click",registrajugador);
    $("#btningresa1").on("click",valida1);
}
//Evento inicial
$(document).on("ready",iniciamemorama);