<?php
require 'conexion.php';

function specialCharacters($s) {

$s = str_replace("[áàâãªä@]","a",$s);

$s = str_replace("[ÁÀÂÃÄ]","A",$s);

$s = str_replace("[éèêë]","e",$s);

$s = str_replace("[ÉÈÊË]","E",$s);

$s = str_replace("[íìîï]","i",$s);

$s = str_replace("[ÍÌÎÏ]","I",$s);

$s = str_replace("[óòôõºö]","o",$s);

$s = str_replace("[ÓÒÔÕÖ]","O",$s);

$s = str_replace("[úùûü]","u",$s);

$s = str_replace("[ÚÙÛÜ]","U",$s);

$s = str_replace("[¿?]","_",$s);

$s = str_replace("ñ","n",$s);

$s = str_replace("Ñ","N",$s);

 

return $s;
}


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
 die("Error de conexión ".mysql_error());   
}


mysql_close($con);

?>
