<?php

$servidor="sql311.260mb.net";
$usuario="n260m_14540624";
$contrasena="skyzen_1";
$baseDatos="n260m_14540624_pueblaservices";
$con=mysql_connect($servidor,$usuario,$contrasena)or die("Error de conexión".mysql_error());
mysql_select_db($baseDatos,$con);
?>
