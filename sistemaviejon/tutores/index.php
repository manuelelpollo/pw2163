<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Registro de TUTORES</title>
	<link rel="stylesheet" href="css/estilos.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
	<script
  src="http://code.jquery.com/jquery-3.1.1.min.js"
  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
  crossorigin="anonymous"></script>
</head>
<body>
	<header>
		<h1>ALTA DE TUTORES</h1>
		<nav>
			<ul>
				<li>
					<button class="btn btn-success">
						<span class="glyphicon glyphicon-arrow-up" aria-hidden="true"></span>
						<br>
						ALTA
					</button>
			
			</ul>
		</nav>

	</header>
	<section id="datostutor">
		<article>
			<div class="panel panel-default">
  				<div class="panel-heading">
   					 <h3 class="panel-title" >Datos del tutor</h3>
  				</div>
  					<div class="panel-body">
  						<form action="registro_tutores.php" method="POST">
  						  <input type="text" id="txtNombre" name="txtNombre"class="form-control"placeholder="Nombre del tutor" autofocus>
  						  <input type="text" id="txtAppaterno" name="txtAppaterno"class="form-control"placeholder="Apellido paterno" autofocus>
  						  <input type="text" id="txtApmaterno" name="txtApmaterno"class="form-control"placeholder="Apellido materno" autofocus>
  						  <select name="carrera" id="carrera" >
  						  	<option value="s">SELECCIONE LA CARRERA</option>
  						  	<option value="Ingenieria ambiental">INGENIERIA AMBIENTAL</option>
  						  	<option value="Ingenieria industrial">INGENIERIA INDUSTRIAL</option>
  						  	<option value="Ingenieria bioquimica">INGENIERIA BIOQUIMICA</option>
  						  	<option value="Ingenieria energias renovables">INGENIERIA ENERGIAS RENOVABLES</option>
  						  	<option value="Ingenieria en tecnologiasde de informacion y comunicaciones">INGENIERIA EN TICS</option>
  						  	<option value="Ingenieria en sistemas computacionales">INGENIERIA EN SISTEMAS COMP.</option>
  						  	<option value="Ingenieria mecatronica">INGENIERIA MECATRONICA</option>
  						  	<option value="Ingenieria mecanica">INGENIERIA MECANICA</option>
  						  	<option value="Ingenieria electrica">INGENIERIA ELECTRICA</option>
  						  	<option value="Ingenieria electronica">INGENIERIA ELECTRONICA</option>
  						  	<option value="Ingenieria en gestion empresarial">INGENIERIA EN GESTION EMP.</option>
  						  </select>
  						  <button id="btnRegistratutor" type="submit" class="btn btn-primary btn-lg btn-block">
  						  	Registrar
  						  </button>
  						 </form>
 					</div>
			</div>
			
		</article>
	</section>
	
</body>
</html>
// <?php
	
// 	//Conecto al servidor
// 	$conexion = mysql_connect("localhost", "root","");
// 	mysql_select_db("Tutores");
// 	$consulta="Select * from tutores order by nombre";
// 	$resultado = mysql_query($consulta); //ejecutando una consulta
// 	$tabla="<table border=1>";
// 	$tabla.="<tr>";
// 	$tabla.="<th>Nombre</th><th>appaterno</th><th>apmaterno</th><th>carrera</th>";
// 	$tabla.="<tr>";
// 	while ($registro = mysql_fetch_array($resultado))
// 	{	
		
// 		$tabla.="<td>".$registro["nombre"]."</td>";
// 		$tabla.="<td>".$registro["appaterno"]."</td>";
// 		$tabla.="<td>".$registro["apmaterno"]."</td>";
// 		$tabla.="<td>".$registro["carrera"]."</td>";
// 		$tabla.="</tr>";

// 	}
// 	$tabla.="</table>";
// 	print $tabla;


// ?>