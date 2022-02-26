<?php

$conexion = new PDO("mysql:host=localhost;port=3306;dbname=rentcar","root","");
$conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);


$res = $conexion->query("SELECT * FROM clientes");
$data = [];

while($item = $res->fetch(PDO::FETCH_OBJ)){

$data[] = [
  "ID" => $item->ID,
  "Nombre" => $item->Nombre,
  "Apellidos" => $item->Apellidos,
  "Cedula" => $item->Cedula,
  "Tarjeta" => $item->Tarjeta,
  "LtCredito" => $item->LtCredito,
  "Tpersona" => $item->Tpersona,
  "Fecha" => $item->Fecha,
  "Extension" => $item->Extension,
  "Estado" => $item->Estado,
];


}

echo json_encode($data);





?>