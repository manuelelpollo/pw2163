<?php
		function GetSQLValueString($theValue, $theType, $theDefinedValue = "", $theNotDefinedValue = "") 
	{
	  $theValue = get_magic_quotes_gpc() ? stripslashes($theValue) : $theValue;

	  $theValue = function_exists("mysql_real_escape_string") ? mysql_real_escape_string($theValue) : mysql_escape_string($theValue);

	  switch ($theType) {
	    case "text":
	      $theValue = ($theValue != "") ? "'" . $theValue . "'" : "NULL";
	      break;    
	    case "long":
	    case "int":
	      $theValue = ($theValue != "") ? intval($theValue) : "NULL";
	      break;
	    case "double":
	      $theValue = ($theValue != "") ? "'" . doubleval($theValue) . "'" : "NULL";
	      break;
	    case "date":
	      $theValue = ($theValue != "") ? "'" . $theValue . "'" : "NULL";
	      break;
	    case "defined":
	      $theValue = ($theValue != "") ? $theDefinedValue : $theNotDefinedValue;
	      break;
	  }
	  return $theValue;
	}

	function valida Usuario()
	{
		$usuario = GetSQLValueString($_POST["usuario"],"text"); //limpieza con el getsqlvaluestring
		$clave = GetSQLValueString($_POST["clave"],"text");     //limpieza con el getsqlvaluestring
		$conexion = mysql_connect("localhost", "root", "");
		$consulta = sprintf("select * from usuario where usuario=%s and clave=%s",);
	}
//menu principal
	$opcion = $_POST["opcion"];
	switch ($opcion) {
		case 'valida':
			validaUsuario();
			break;
		
		default:
			# code...
			break;
	}





?>