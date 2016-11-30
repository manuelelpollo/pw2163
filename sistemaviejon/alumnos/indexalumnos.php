 <h1>ALTA DE ALUMNOS</h1>
<form action="registro_alumnos.php" method="POST">
	<input type="hidden" name="txtOculto" value="guardaalumno">
	
	<br>
	<input type="text" name="txtNombre" id="textNombre" placeholder="Nombre">
	<br>
	<input type="text" name="txtAppaterno" id="textAppaterno" placeholder="apellido paterno">
	<br>
	<input type="text" name="txtApmaterno" id="textApmaterno" placeholder="apellido materno">
	<br>
	<input type="text" name="txtNumcontrol" id="textNumcontrol" placeholder="Numero de control">
	<br>
	<!-- <select name="txtTipo" id="txtTipo">
		<option value="administrador">Administrador</option>
		<option value="invitado">Invitado</option>
		<option value="colado">Colado</option>
	</select> -->
	<br>
	<input type="submit" value="Registrar">
</form>
<hr>
<?php
	
	//Conecto al servidor
	$conexion = mysql_connect("localhost", "root","");
	mysql_select_db("Tutores");
	$consulta="Select * from alumnos order by nombre";
	$resultado = mysql_query($consulta); //ejecutando una consulta
	$tabla="<table border=1>";
	$tabla.="<tr>";
	$tabla.="<th>nombre</th><th>apellido</th><th>apellido</th><th>numerocontrol</th>";
	$tabla.="<tr>";
	while ($registro = mysql_fetch_array($resultado))
	{	
		
		$tabla.="<td>".$registro["nombre"]."</td>";
		$tabla.="<td>".$registro["appaterno"]."</td>";
		$tabla.="<td>".$registro["apmaterno"]."</td>";
		$tabla.="<td>".$registro["numcontrol"]."</td>";
		$tabla.="</tr>";

	}
	$tabla.="</table>";
	print $tabla;


?>