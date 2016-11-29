<?php
		//preguntar si los valores existen
		$oculto=""; //inicializando la variable
		$nombre="";
		$appaterno="";
		$apmaterno="";
		$carrera="";
		$aulas="";
		$periodo="";
		$horario="";
		$dias="";

		if(isset($_POST["oculto"])) //si trae valores
		{
			$oculto=$_POST["oculto"];
		}
		
		if(isset($_POST["txtNombre"])) //si trae valores
		{
			$nombre=$_POST["txtNombre"];
		}
		if(isset($_POST["txtAppaterno"])) //si trae valores
		{
			$appaterno=$_POST["txtAppaterno"];
		}
		if(isset($_POST["txtApmaterno"])) //si trae valores
		{
			$apmaterno=$_POST["txtApmaterno"];
		}
		if(isset($_POST["carrera"])) //si trae valores
		{
			$carrera=$_POST["carrera"];
		}
		if(isset($_POST["aulas"]))
		{
			$aulas=$_POST["aulas"];
		}
		if(isset($_POST["periodo"]))
		{
			$periodo=$_POST["periodo"];
		}
		if(isset($_POST["horario"]))
		{
			$horario=$_POST["horario"];
		}
		if(isset($_POST["dias"]))
		{
			$dias=$_POST["dias"];
		}

		function guardatutor($nombre,$appaterno,$apmaterno,$carrera,$aulas,$periodo,$horario,$dias)
		{
			//conectarse al servidor MySQL.
			//MySQL (servidor, usuario,contraseña)
			$conexion= mysql_connect("localhost","root","");
			//seleccionamos la bd
			mysql_select_db("Tutores");
			$consulta="insert into tutores values('".$nombre."','".$appaterno."','".$apmaterno."','".$carrera."','".$aulas."','".$periodo."','".$horario."','".$dias."',)";
			//ejecutamos la consulta
			mysql_query($consulta);
			//preguntamos si hubo insercion
			if(mysql_affected_rows()>0)
			{
				print "TUTOR guardado con exito <br>";
				print "<a href='index.php'> Regresar</a>";
			}
			else
			{
				print "no se pudo guardar el registro ";
			}

		}


		switch ($oculto) {
			case 'guardatutor':
				guardatutor($nombre,$appaterno,$apmaterno,$carrera,$aulas,$periodo,$horario,$dias);
				break;
			
			default:
				# code...
				break;
		}



?>