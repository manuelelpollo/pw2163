<?php
		//preguntar si los valores existen
		$oculto=""; //inicializando la variable
		$nombre="";
		$appaterno="";
		$apmaterno="";
		$carrera="";
		if(isset($_POST["txtOculto"])) //si trae valores
		{
			$oculto=$_POST["txtOculto"];
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

		function guardatutor($nombre,$appaterno,$apmaterno,$carrera)
		{
			//conectarse al servidor MySQL.
			//MySQL (servidor, usuario,contraseña)
			$conexion= mysql_connect("localhost","root","");
			//seleccionamos la bd
			mysql_select_db("Tutores");
			$consulta="insert into tutores values('".$nombre."','".$appaterno."','".$apmaterno."','".$carrera."')";
			//ejecutamos la consulta
			mysql_query($consulta);
			//preguntamos si hubo insercion
			if(mysql_affected_rows()>0)
			{
				print "registro guardado <br>";
				print "<a href='sistemaviejon/index.html'> Regresar</a>";
			}
			else
			{
				print "no se pudo guardar el registro ";
			}

		}


		switch ($oculto) {
			case 'guardatutor':
				guardatutor($nombre,$appaterno,$apmaterno,$carrera);
				break;
			
			default:
				# code...
				break;
		}



?>