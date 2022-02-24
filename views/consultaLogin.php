<?php

$conexion = new PDO("mysql:host=localhost;port=3306;dbname=rentcar","root","");
$conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);


$res = $conexion->query("SELECT * FROM usuarios");
$data = [];

while($item = $res->fetch(PDO::FETCH_OBJ)){

$data[] = [
  "user" => $item->user,
  "password" => $item->password,
  "ID" => $item->ID,
];


}

echo json_encode($data);





?>