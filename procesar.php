<?php
require 'conexion.php';

$nombre=$_POST["nombre"];
$direccion=$_POST["direccion"];
$telefono=$_POST["telefono"];
$correo=$_POST["correo"];
$latitud=$_POST["latitud"];
$longitud=$_POST["longitud"];

$sql="INSERT INTO servicios(id, nombre, direccion, telefono, correo, latitud, longitud)VALUES('','$nombre','$direccion','$telefono','$correo','$latitud','$longitud')";
$resultado=mysql_query($sql,$con);

if($resultado){
 echo "El registro se almaceno de manera correcta";  
 
}else{
 die("Error de conexión".mysql_error());   
}


mysql_close($con);

?>
