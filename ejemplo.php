
<h1>ALTA DE USUARIOS</h1>
<form action="registro_ejemplo.php" method="POST">
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
<hr>
<?php
	
	//Conecto al servidor
	$conexion = mysql_connect("localhost", "root","");
	mysql_select_db("bd2163");
	$consulta="Select * from usuarios order by usuario";
	$resultado = mysql_query($consulta); //ejecutando una consulta
	$tabla="<table border=1>";
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


?>


