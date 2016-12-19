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
		$u = GetSQLValueString($_POST["usuario"],"text"); //limpieza
		$c = GetSQLValueString($_POST["clave"],"text"); //limpieza
		//Conexión al servidor
		$conexion  = mysql_connect("localhost","root","");
		//Conexión a la base de datos
		mysql_select_db("bd2163");
		$consulta  = sprintf("select usuario,clave from usuarios where usuario=%s and clave=%s limit 1",$u,$c);
		$resultado = mysql_query($consulta);
		//Esperamos un solo resultado
		if(mysql_num_rows($resultado) == 1)
		{
			$respuesta = true;
		}
		$arregloJSON = array('respuesta' => $respuesta );
		print json_encode($arregloJSON);
	}
	function guardaTutor()
	{
		$respuesta=false;
		$nombre = GetSQLValueString($_POST["nombre"],"text"); //limpieza
		$appaterno = GetSQLValueString($_POST["appaterno"],"text"); //limpieza
		$apmaterno = GetSQLValueString($_POST["apmaterno"],"text"); //limpieza
		$carrera = GetSQLValueString($_POST["carrera"],"text"); //limpieza
		$aula = GetSQLValueString($_POST["aula"],"text"); //limpieza
		$horario = GetSQLValueString($_POST["horario"],"text"); //limpieza
		$dia = GetSQLValueString($_POST["dia"],"text"); //limpieza
		$periodo = GetSQLValueString($_POST["periodo"],"text"); //limpieza
		$conexion=mysql_connect("localhost","root","");
		mysql_select_db("Tutores");
		$consulta=sprintf("insert into tutores values(%s,%s,%s,%s,%s,%s,%s,%s)",$nombre,$appaterno,$apmaterno,$carrera,$aula,$horario,$dia,$periodo);
		mysql_query($consulta);
		if(mysql_affected_rows()>0) 
		{
			$respuesta = true;
		}
		$arregloJSON = array('respuesta' => $respuesta );
		print json_encode($arregloJSON);

	}
	function guardaAlumno()
	{
		$respuesta=false;
		$nombre = GetSQLValueString($_POST["nombre"],"text"); //limpieza
		$appaterno = GetSQLValueString($_POST["appaterno"],"text"); //limpieza
		$apmaterno = GetSQLValueString($_POST["apmaterno"],"text"); //limpieza
		$control = GetSQLValueString($_POST["nocontrol"],"text"); //limpieza
		$carrera = GetSQLValueString($_POST["carrera"],"text"); //limpieza
		$semestre = GetSQLValueString($_POST["semestre"],"text"); //limpieza
		$conexion=mysql_connect("localhost","root","");
		mysql_select_db("Tutores");
		$consulta=sprintf("insert into alumnos values(%s,%s,%s,%s,%s,%s)",$nombre,$appaterno,$apmaterno,$control,$carrera,$semestre);
		mysql_query($consulta);
		if(mysql_affected_rows()>0) 
		{
			$respuesta = true;
		}
		$arregloJSON = array('respuesta' => $respuesta );
		print json_encode($arregloJSON);

	}
	function busca()
	{
		$respuesta = false;
		$nombre = GetSQLValueString($_POST["nombre"],"text");
		$conexion = mysql_connect("localhost","root","");
		mysql_select_db("Tutores");
		$consulta = sprintf("select * from tutores where nombre=%s",$nombre);		
		$resultado = mysql_query($consulta);
		if(mysql_num_rows($resultado)>0) //Si hay registros
		{
			$respuesta = true;
			if($registro = mysql_fetch_array($resultado))
			{
				$arregloJSON = array('respuesta' => $respuesta,
					                 "nombre"    => $registro["nombre"],
					                 "appaterno"     => $registro["appaterno"],
					                 "apmaterno"     => $registro["apmaterno"],
					                 "carrera"     => $registro["carrera"],
					                 "aulas"     => $registro["aulas"],
					                 "horario"      => $registro["horario"],
					                 "dias"      => $registro["dias"],
					                 "periodo"      => $registro["periodo"]);
			}
		}
		else //Si no hay registros
		{
			$arregloJSON = array('respuesta' => $respuesta);
		}
		print json_encode($arregloJSON);
	}

	function bajaTutor()
	{
		$respuesta = false;
		$nombre = GetSQLValueString($_POST["nombre"],"text");
		$conexion = mysql_connect("localhost","root","");
		mysql_select_db("Tutores");
		$consulta = sprintf("delete from tutores where nombre=%s",$nombre);
		mysql_query($consulta);
		//Si el registro se borró
		if(mysql_affected_rows()>0) 
		{
			$respuesta = true;
		}
		$arregloJSON = array('respuesta' => $respuesta );
		print json_encode($arregloJSON);
	}
	function buscaAlumno()
	{

	    $respuesta = false;
		$nombre = GetSQLValueString($_POST["nombre"],"text");
		$conexion = mysql_connect("localhost","root","");
		mysql_select_db("Tutores");
		$consulta = sprintf("select * from alumnos where nombre=%s",$nombre);		
		$resultado = mysql_query($consulta);
		if(mysql_num_rows($resultado)>0) //Si hay registros
		{
			$respuesta = true;
			if($registro = mysql_fetch_array($resultado))
			{
				$arregloJSON = array('respuesta' => $respuesta,      
					                 "appaterno"     => $registro["appaterno"],
					                 "apmaterno"     => $registro["apmaterno"],
					                 "numcontrol"     => $registro["numcontrol"],
					                 "carrera"     => $registro["carrera"],
					                 "semestre"    => $registro["semestre"]);
			}
		}
		else //Si no hay registros
		{
			$arregloJSON = array('respuesta' => $respuesta);
		}
		print json_encode($arregloJSON);	
	}
	function bajaAlumno()
	{
		$respuesta = false;
		$nombre = GetSQLValueString($_POST["nombre"],"text");
		$conexion = mysql_connect("localhost","root","");
		mysql_select_db("Tutores");
		$consulta = sprintf("delete from alumnos where nombre=%s",$nombre);
		mysql_query($consulta);
		//Si el registro se borró
		if(mysql_affected_rows()>0) 
		{
			$respuesta = true;
		}
		$arregloJSON = array('respuesta' => $respuesta );
		print json_encode($arregloJSON);

	}
	function actualizaTutor()
	{
		$respuesta=false;
		$nombre = GetSQLValueString($_POST["nombre"],"text"); //limpieza
		$appaterno = GetSQLValueString($_POST["appaterno"],"text"); //limpieza
		$apmaterno = GetSQLValueString($_POST["apmaterno"],"text"); //limpieza
		$carrera = GetSQLValueString($_POST["carrera"],"text"); //limpieza
		$aula = GetSQLValueString($_POST["aula"],"text"); //limpieza
		$horario = GetSQLValueString($_POST["horario"],"text"); //limpieza
		$dia = GetSQLValueString($_POST["dia"],"text"); //limpieza
		$periodo = GetSQLValueString($_POST["periodo"],"text"); //limpieza
		$conexion=mysql_connect("localhost","root","");
		mysql_select_db("Tutores");
		$consulta=sprintf("update tutores set  nombre=%s,appaterno=%s,apmaterno=%s,carrera=%s,aulas=%s,horario=%s,dias=%s,periodo=%s where nombre=%s",$nombre,$appaterno,$apmaterno,$carrera,$aula,$horario,$dia,$periodo,$nombre);
		mysql_query($consulta);
		if(mysql_affected_rows()>0) 
		{
			$respuesta = true;
		}
		$arregloJSON = array('respuesta' => $respuesta );
		print json_encode($arregloJSON);

	}
	function actualizaA()
	{
		$respuesta=false;
		$nombre = GetSQLValueString($_POST["nombre"],"text"); //limpieza
		$appaterno = GetSQLValueString($_POST["appaterno"],"text"); //limpieza
		$apmaterno = GetSQLValueString($_POST["apmaterno"],"text"); //limpieza
		$control = GetSQLValueString($_POST["nocontrol"],"text"); //limpieza
		$carrera = GetSQLValueString($_POST["carrera"],"text"); //limpieza
		$semestre = GetSQLValueString($_POST["semestre"],"text"); //limpieza
		$conexion=mysql_connect("localhost","root","");
		mysql_select_db("Tutores");
		$consulta=sprintf("update alumnos set nombre=%s,appaterno=%s,apmaterno=%s,numcontrol=%s,carrera=%s,semestre=%s where nombre=%s",$nombre,$appaterno,$apmaterno,$control,$carrera,$semestre,$nombre);
		mysql_query($consulta);
		if(mysql_affected_rows()>0) 
		{
			$respuesta = true;
		}
		$arregloJSON = array('respuesta' => $respuesta );
		print json_encode($arregloJSON);
	}
	function Consultas()
	{
		$respuesta = true;
		$conexion = mysql_connect("localhost","root","");
		mysql_select_db("Tutores");
		$renglones="<tr>";
		$renglones.="<tr><td colspan=8 align=center>TUTORES</td></tr>";
		$renglones.="<th>Nombre</th><th>apellido</th><th>apellido</th><th>carrera</th><th>aulas</th><th>horario</th><th>dias</th><th>periodo</th>";
		$renglones.="</tr>";
		 

		$consulta = sprintf("select nombre,appaterno,apmaterno,carrera,aulas,horario,dias,periodo from tutores order by nombre");
		$resultado = mysql_query($consulta);
		if(mysql_num_rows($resultado)>0)
		{
			while($registro = mysql_fetch_array($resultado))
			{
				$renglones.="<tr>";
				$renglones.="<td>".$registro["nombre"]."</td>";
				$renglones.="<td>".$registro["appaterno"]."</td>";				
				$renglones.="<td>".$registro["apmaterno"]."</td>";			
				$renglones.="<td>".$registro["carrera"]."</td>";			
				$renglones.="<td>".$registro["aulas"]."</td>";			
				$renglones.="<td>".$registro["horario"]."</td>";			
				$renglones.="<td>".$registro["dias"]."</td>";			
				$renglones.="<td>".$registro["periodo"]."</td>";			
				$renglones.="</tr>";
			}
		}
		else
		{
			$renglones = "<tr><td colspan=3>Sin usuarios registrados</td></tr>";			
		}
		$arregloJSON = array('respuesta' => $respuesta, 
							 'renglones' => $renglones);
		print json_encode($arregloJSON);
	}

	function consultaA()
		{
			$respuesta = true;
		$conexion = mysql_connect("localhost","root","");
		mysql_select_db("Tutores");
		$renglones="<tr>";
		$renglones.="<tr><td colspan=8 align=center>ALUMNOS</td></tr>";
		$renglones.="<th>Nombre</th><th>apellido</th><th>apellido</th><th>numcontrol</th><th>carrera</th><th>semestre</th>";
		$renglones.="</tr>";
		$consulta = sprintf("select nombre,appaterno,apmaterno,numcontrol,carrera,semestre from alumnos order by nombre");
		$resultado = mysql_query($consulta);
		if(mysql_num_rows($resultado)>0)
		{
			while($registro = mysql_fetch_array($resultado))
			{
				$renglones.="<tr>";
				$renglones.="<td>".$registro["nombre"]."</td>";
				$renglones.="<td>".$registro["appaterno"]."</td>";				
				$renglones.="<td>".$registro["apmaterno"]."</td>";			
				$renglones.="<td>".$registro["numcontrol"]."</td>";			
				$renglones.="<td>".$registro["carrera"]."</td>";			
				$renglones.="<td>".$registro["semestre"]."</td>";					
				$renglones.="</tr>";
			}
		}
		else
		{
			$renglones = "<tr><td colspan=3>Sin usuarios registrados</td></tr>";			
		}
		$arregloJSON = array('respuesta' => $respuesta, 
							 'renglones' => $renglones);
		print json_encode($arregloJSON);
		}
	//Menú principal
	$opc = $_POST["opcion"];
	switch ($opc) {
		case 'valida':
			validaUsuario();
			break;
		case 'guarda':
			guardaTutor();
			break;
		case 'guardaAlumno':
			guardaAlumno();
			break;
		case 'busca':
			busca();
			break;
		case 'baja':
			bajaTutor();
			break;
		case 'buscaA':
			buscaAlumno();
			break;
		 case 'eliminA':
		   bajaAlumno();
		 	break;
		case 'actualizaT':
			actualizaTutor();
			break;
		case 'actualizaA':
			actualizaA();
			break;
		case 'consultas':
			Consultas();
			break;
		case 'consultaA':

			consultaA();
			break;
	
		default:
			# code...
			break;
	}
?>