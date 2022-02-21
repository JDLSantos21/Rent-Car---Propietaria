<?php

$conexion = new PDO("mysql:host=localhost;port=3306;dbname=rentcar","root","");
$conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);


$res = $conexion->query("SELECT * FROM carslist");
$data = [];

while($item = $res->fetch(PDO::FETCH_OBJ)){

$data[] = [
  "ID" => $item->ID,
  "Marca" => $item->Marca,
  "Modelo" => $item->Modelo,
  "Year" => $item->Year,
  "Placa" => $item->Placa,
  "Tipo" => $item->Tipo,
  "Chasis" => $item->Chasis,
  "Motor" => $item->Motor,
  "Tcombustible" => $item->Tcombustible,
  "Descripcion" => $item->Descripcion,
  "Estado" => $item->Estado

];


}

echo json_encode($data);





?>