<?php
require 'conexion.php';

// Ruta de la carpeta para subir los archivos
$var = "http://parkingapp.260mb.net/img";
	
/// Comprueba Errores al subir
if ($_FILES["file"]["error"] > 0) {
	// Si hay un error, imprime el numero de error
	// Tipo de errores según el numero: http://php.net/manual/es/features.file-upload.errors.php
	echo "Return Code: " . $_FILES["file"]["error"] . "<br />";	
} else {
	// Comprueba si el archivo ya existe
	if (file_exists($var.'/'. $_FILES["file"]["name"])) {
		echo $_FILES["file"]["name"] . " ya existe. ";		
	} else {
		// Sube el archivo a la ruta
		move_uploaded_file($_FILES["file"]["tmp_name"], $var.'/' . $_FILES["file"]["name"]);
$sql='INSERT INTO servicios (imagen) VALUES ($var.'/'.$_FILES["file"]["name"])';
	}
	echo "Se guardo de manera correcta";  
}
?>