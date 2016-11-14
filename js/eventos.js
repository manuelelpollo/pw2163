//DOM = modelo de objetos del documento
//$ = jquery
//inicializar nuestro documentos

var inicio=function()
{
	var dameclic = function ()
	{
		alert("le di click a un boton");
	}
	$("#dameClic").on("click",dameclic);
}
//ready = evento , inicio= funcion
$(document).on("ready",inicio);
