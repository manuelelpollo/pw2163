

//variable global
var operador="";

function igual()
{
	var valor1= document.calculadora.operando1.value;
	var valor2= document.calculadora.operando2.value;
	document.calculadora.resultado.value=eval(valor1+operador+valor2);	
	
}


function operadores(ope)
{
	operador = ope;
}


function numeros(numero)
{
	if(operador =="") //escribir en el operando1
	{
		//guardamos el valor del operando1
		var valor = document.calculadora.operando1.value;
		if(valor=="0")
		{
			document.calculadora.operando1.value = "";
		}
		document.calculadora.operando1.value = document.calculadora.operando1.value + numero;
	}
	else //escribir en el operando 2
	{
		//guardamos el valor del operando1
		var valor= document.calculadora.operando2.value;
		if(valor=="0")
		{
			document.calculadora.operando2.value="";
		}
		document.calculadora.operando2.value = document.calculadora.operando2.value + numero;
	}

}
