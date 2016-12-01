<?php
		//preguntar si los valores existen
		$nombre=""; //inicializando la variable
		$appaterno="";
		$apmaterno="";
		$numcontrol="";
		 
		if(isset($_POST["txtOculto"])) //si trae valores
		{
			$oculto=$_POST["txtOculto"];
		}
		if(isset($_POST["txtNumcontrol"])) //si trae valores
		{
			$numcontrol=$_POST["txtNumcontrol"];
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
		 
		function guardaUsuario($numcontrol,$nombre,$appaterno,$apmaterno)
		{
			//conectarse al servidor MySQL.
			//MySQL (servidor, usuario,contraseña)
			$conexion= mysql_connect("localhost","root","");
			//seleccionamos la bd
			mysql_select_db("Tutores");
			$consulta="insert into alumnos values('.$numcontrol.','".$nombre."','".$appaterno."','".$apmaterno."')";
			//ejecutamos la consulta
			mysql_query($consulta);
			//preguntamos si hubo insercion
			if(mysql_affected_rows()>0)
			{
				print "registro guardado <br>";
				print "<a href='indexalumnos.php'> Regresar</a>";
			}
			else
			{
				print "no se pudo guardar el registro ";
			}

		}


		switch ($oculto) {
			case 'guardaalumno':
				guardaUsuario($numcontrol,$nombre,$appaterno,$apmaterno);
				break;
			
			default:
				# code...
				break;
		}



?>