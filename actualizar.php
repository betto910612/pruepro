<?php
require 'conexion.php';
echo $maran=$_GET["MarAntigua"];
echo $marnu=$_GET["MarNueva"];

$sql="update autos set Marca='$marnu' where Marca='$maran'";
$res=mysql_query($sql,$con);
if($res){
	echo" Datos actualizados";
	}
	else{
		die("Hubo un error al actualizar".mysql_error());
	}
	mysql_close($con);
?>
