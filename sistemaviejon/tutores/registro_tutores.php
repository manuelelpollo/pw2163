<?php
		//preguntar si los valores existen
		$oculto=""; //inicializando la variable
		$nombre="";
		$appaterno="";
		$apmaterno="";
		$carrera="";
		$aulas="";
		$horario="";
		$dias="";
		$periodo="";

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
		if(isset($_POST["txtcarrera"])) //si trae valores
		{
			$carrera=$_POST["txtcarrera"];
		}
		if(isset($_POST["txtaulas"]))
		{
			$aulas=$_POST["txtaulas"];
		}
		if(isset($_POST["txthorario"]))
		{
			$horario=$_POST["txthorario"];
		}
		if(isset($_POST["txtdias"]))
		{
			$dias=$_POST["txtdias"];
		}
		if(isset($_POST["txtperiodo"]))
		{
			$periodo=$_POST["txtperiodo"];
		}
		
		

		function guardatutor($nombre,$appaterno,$apmaterno,$carrera,$aulas,$horario,$dias,$periodo)
		{
			//conectarse al servidor MySQL.
			//MySQL (servidor, usuario,contraseña)
			$conexion= mysql_connect("localhost","root","");
			//seleccionamos la bd
			mysql_select_db("Tutores");
			$consulta="insert into tutores values('".$nombre."','".$appaterno."','".$apmaterno."','".$carrera."','".$aulas."','".$horario."','".$dias."','".$periodo."',)";
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
				print "no se pudo guardar el registro <br>";
				print "<a href='index.php'> Regresar</a>";
			}

		}


		switch ($oculto) {
			case 'guardatutor':
				guardatutor($nombre,$appaterno,$apmaterno,$carrera,$aulas,$horario,$dias,$periodo);
				break;
			
			default:
				# code...
				break;
		}



?>