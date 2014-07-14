<?php
require 'conexion.php';

$sql="SELECT idauto, Marca, Modelo, Color, Precio FROM autos";
$resultado=mysql_query($sql,$con);
if($resultado){
    $datos = array();
    $i=0;
    while($fila = mysql_fetch_assoc($resultado)) 
    { 
      $datos[$i] = $fila;
    $i=$i+1;
    }
}else{
 die("Error de conexión".mysql_error());   
}

mysql_close($con);
echo json_encode($datos);
?>
