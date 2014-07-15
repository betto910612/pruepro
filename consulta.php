<?php
require 'conexion.php';

$sql="SELECT * FROM servicios";
$resultado=mysql_query($sql,$con);
$row = mysql_fetch_assoc($resultado);
header("Content-Type: text/xml;charset=iso-8859-1");


echo '<?xml version="1.0" encoding="UTF-8"?>';

echo '<markers xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

do{

echo'<marker id="".$row["id"]."" lat="".$row["lat"]."" lng="".$row["lng"]."" title="".$row["title"]."" content="".$row["content"]."" icon="".$row["icon"].""/>';

}while($row=mysql_fetch_assoc($resultado));

echo "</markers>";


?>
