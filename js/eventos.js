//DOM = modelo de objetos del documento
//$ = jquery
//inicializar nuestro documentos

var inicio=function()
{
	var dameclic = function ()
	{
	$.ajax
	(
		{
	  url: 'https://randomuser.me/api/',
	  dataType: 'json',
	  success: function(data) 
	  		{
	  	$("#imgfoto").show("slow");
	  	$("#txtnombre").show("slow");
	  	$("#txtnombre").val(data.results[0].name.first+" "+data.results[0].name.last);
	  	$("#imgfoto").attr("src",data.results[0].picture.medium);
	  	$("#miarticle").html("Texto");
	    console.log(data.results[0].name.first+" "+data.results[0].name.last);
	 		 }
		}
	);
      
	}
	$("#dameClic").on("click",dameclic);
}
//ready = evento , inicio= funcion
$(document).on("ready",inicio);
