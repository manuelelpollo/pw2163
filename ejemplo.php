<?php
		//preguntar si los valores existen
		$oculto=""; //inicializando la variable
		$usuario="";
		$nombre="";
		$clave="";
		$tipo="";
		if(isset($_POST["txtOculto"])) //si trae valores
		{
			$oculto=$_POST["txtOculto"];
		}
		if(isset($_POST["txtUsuario"])) //si trae valores
		{
			$usuario=$_POST["txtUsuario"];
		}
		if(isset($_POST["txtNombre"])) //si trae valores
		{
			$nombre=$_POST["txtNombre"];
		}
		if(isset($_POST["txtClave"])) //si trae valores
		{
			$clave=$_POST["txtClave"];
		}
		if(isset($_POST["txtTipo"])) //si trae valores
		{
			$tipo=$_POST["txtTipo"];
		}

		function guardaUsuario($usuario,$nombre,$clave,$tipo)
		{
			//conectarse al servidor MySQL.
			//MySQL (servidor, usuario,contraseña)
			$conexion= mysql_connect("localhost","root","");
			//seleccionamos la bd
			mysql_select_db("bd2163");
			$consulta="insert into usuarios values('".$usuario."','".$nombre."','".$clave."','".$tipo."')";
			//ejecutamos la consulta
			mysql_query($consulta);
			//preguntamos si hubo insercion
			if(mysql_affected_rows()>0)
			{
				print "registro guardado";
			}
			else
			{
				print "no se pudo guardar el registro ";
			}

		}


		switch ($oculto) {
			case 'guardaUsuario':
				guardaUsuario($usuario,$nombre,$clave,$tipo);
				break;
			
			default:
				# code...
				break;
		}



?>
<h1>ALTA DE USUARIOS</h1>
<form action="ejemplo.php" method="POST">
	<input type="hidden" name="txtOculto" value="guardaUsuario">
	<input type="text" name="txtUsuario" id="textUsuario" placeholder="Usuario">
	<br>
	<input type="text" name="txtNombre" id="textNombre" placeholder="Nombre">
	<br>
	<input type="password" name="txtClave" id="textClave" placeholder="Clave">
	<br>
	<select name="txtTipo" id="txtTipo">
		<option value="administrador">Administrador</option>
		<option value="invitado">Invitado</option>
		<option value="colado">Colado</option>
	</select>
	<br>
	<input type="submit" value="Enviar">
</form>



