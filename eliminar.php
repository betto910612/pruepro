<?php
require 'conexion.php';

echo $mareli=$_GET["MarEl"];
$sql="delete from autos where Marca='$mareli'";

$res=mysql_query($sql,$con);
if($res){
	echo" Datos eliminados correctamente";
	}
	else{
		die("Hubo un error al eliminar".mysql_error());
	}
	mysql_close($con);

?>
