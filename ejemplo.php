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
<?php



?>


