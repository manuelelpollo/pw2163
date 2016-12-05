<?php
		function GetSQLValueString($theValue, $theType, $theDefinedValue = "", $theNotDefinedValue = "") 
	{
	  $theValue = get_magic_quotes_gpc() ? stripslashes($theValue) : $theValue;

	 // $theValue = function_exists("mysql_real_escape_string") ? mysql_real_escape_string($theValue) : mysql_escape_string($theValue);

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

	function validaUsuario()
	{
		$respuesta = false;
		$usuario = GetSQLValueString($_POST["usuario"],"text"); //limpieza con el getsqlvaluestring
		$clave = GetSQLValueString($_POST["clave"],"text");     //limpieza con el getsqlvaluestring
		$conexion = mysql_connect("localhost", "root", "");
		mysql_select_db("bd2163");
		$consulta = sprintf("select usuario,clave from usuarios where usuario=%s and clave=%s limit 1",$usuario,$clave);  //%S S=por que viene string, si fuera int pusieramos %D
		$resultado = mysql_query($consulta);
		//esperamos un solo resultadol
		if(mysql_num_rows($resultado) == 1)
		{
			$respuesta = true;

		}
		$arregloJSON = array('respuesta' => $respuesta); //convertimos nuesrtra $respuesta a formato json 
		print json_encode($arregloJSON);
		
	}
	function guardaUsuario()
	{
		$respuesta=false;
		$usuario=GetSQLValueString($_POST["usuario"],"text");
		$nombre=GetSQLValueString($_POST["nombre"],"text");
		$clave=GetSQLValueString($_POST["clave"],"text");
		$tipo=GetSQLValueString($_POST["tipo"],"text");
		$conexion= mysql_connect("localhost","root","");
		mysql_select_db("bd2163");
		$consulta="insert into usuarios values(".$usuario.",".$nombre.",".$clave.",".$tipo.")";
		mysql_query($consulta);
			 
			//preguntamos si hubo insercion
			if(mysql_affected_rows()>0)
			{
				 
				$respuesta= true;
				// print "registro guardado <br>";
				

			}
			else
			{
				print "no se pudo guardar el registro ";
			}

			$arregloJSON = array('respuesta' => $respuesta); //convertimos nuesrtra $respuesta a formato json 
		    print json_encode($arregloJSON);
	}
	function bajaUsuario()
	{
		$respuesta=false;
		$usuario=GetSQLValueString($_POST["usuario"],"text");
		$conexion= mysql_connect("localhost","root","");
		mysql_select_db("bd2163");
		$consulta=sprintf("delete from usuarios where usuario=%s",$usuario);
		mysql_query($consulta);
		if(mysql_affected_rows()>0)
			{
				 
				$respuesta= true;
				// print "registro guardado <br>";
				

			}
			else
			{
				print "no se pudo eliminar el registro ";
			}

			$arregloJSON = array('respuesta' => $respuesta); //convertimos nuesrtra $respuesta a formato json 
		    print json_encode($arregloJSON);

	}
	function usuarioCambio()
	{
		$respuesta=false;
		$usuarioamodificar=GetSQLValueString($_POST["usuarioamodificar"],"text");
		$usuarioN=GetSQLValueString($_POST["usuario"],"text");
		$nombreN=GetSQLValueString($_POST["nombre"],"text");
		$claveN=GetSQLValueString($_POST["clave"],"text");
		$tipoN=GetSQLValueString($_POST["tipo"],"text");
		$conexion= mysql_connect("localhost","root","");
		mysql_select_db("bd2163");
		$consulta=sprintf("update usuarios set usuario=%s, nombre=%s, clave=%s,tipousuario=%s where usuario like %s",$usuarioN,$nombreN,$claveN,$tipoN,$usuarioamodificar);
		mysql_query($consulta);
		if(mysql_affected_rows()>0)
			{
				 
				$respuesta= true;
				// print "registro guardado <br>";
				

			}
			

			$arregloJSON = array('respuesta' => $respuesta); //convertimos nuesrtra $respuesta a formato json 
		    print json_encode($arregloJSON);

	}
	function consultaUsuario()
	{
		$respuesta=false;
		$usuario=GetSQLValueString($_POST["usuario"],"text");
		$conexion= mysql_connect("localhost","root","");
		mysql_select_db("bd2163");
		$consulta=sprintf("select * from usuarios where usuario=%s",$usuario);
		$resultado=mysql_query($consulta);
		$tabla.="<tr>";
		$tabla.="<th>Usuario</th><th>Nombre</th><th>Clave</th><th>Tipo</th>";
		$tabla.="<tr>";
		while ($registro = mysql_fetch_array($resultado))
	{	
			
		$tabla.="<td>".$registro["usuario"]."</td>";
		$tabla.="<td>".$registro["nombre"]."</td>";
		$tabla.="<td>".$registro["clave"]."</td>";
		$tabla.="<td>".$registro["tipousuario"]."</td>";
		$tabla.="</tr>";

	}
	$tabla.="</table>";
	print $tabla;
			$arregloJSON = array('respuesta' => $respuesta,'tabla' =>$tabla); //convertimos nuesrtra $respuesta a formato json 
		    print json_encode($arregloJSON);
	}
//menu principal
	$opcion = $_POST["opcion"];
	switch ($opcion) {
		case 'valida':
			validaUsuario();
			break;
		case 'guarda':
			//GuardaUsuario($usuario,$nombre,$clave,$tipo);
			guardaUsuario();
			break;
		case 'baja':
			bajaUsuario();
			break;
		case 'cambio':
			usuarioCambio();
			break;
		case 'consulta':
 			consultaUsuario();
 			break;
		
		default:
			# code...
			break;
	}
 





?>