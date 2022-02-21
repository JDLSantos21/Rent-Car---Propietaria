<?php 

$server = "localhost";
$user = "root";
$pass = "";
$database = "rentcar";

$link = mysqli_connect($server, $user, $pass, $database);

if(!$link){
  echo "error en la conexion con la base de datos";
}else{
  echo "conxion con la base de datos exitosa";
}

?>