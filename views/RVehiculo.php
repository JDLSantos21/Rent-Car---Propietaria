<?php

$server = "localhost";
$user = "root";
$pass = "";
$database = "rentcar";

$link = mysqli_connect($server, $user, $pass, $database);

if(!$link){
  echo "error en la conexion con la base de datos";
}else{
  echo "conexion con la base de datos exitosa";
}



if(isset($_POST['registrar'])){
  $marca =strtolower($_POST["marca"]);
  $modelo =$_POST["modelo"];
  $tipo =$_POST["tipo"];
  $placa =strtolower($_POST["placa"]);
  $chasis =$_POST["chasis"];
  $motor =$_POST["motor"];
  $Tcombustible =$_POST["Tcombustible"];
  $estado =$_POST["estado"];
  $descripcion =$_POST["descripcion"];
  $año =$_POST["year"];
}

$insertarDatos = "INSERT INTO carslist VALUES('NULL',
                                                '$marca',
                                                '$modelo',
                                                '$año',
                                                '$placa',
                                                '$tipo',
                                                '$chasis',
                                                '$motor',
                                                '$Tcombustible',
                                                '$descripcion',
                                                '$estado')";

$ejecutarInsert = mysqli_query($link,$insertarDatos);

if($_FILES["imagen"] ["error"]>0){
  echo "Error al cargar el archivo.";
}
$ruta = "../source/images/";
$archivo = $ruta.$_FILES["imagen"]["name"];
$sourceFoto = $_FILES["imagen"] ["tmp_name"];

$explode = explode('.', $archivo);
$extensionImagen = array_pop($explode);
$newName = $placa.'.'.$extensionImagen;
$imagenCarro = $ruta.'/'.$newName;

$resultado = @move_uploaded_file($sourceFoto, $imagenCarro);



// $_UPDATE_SQL = "UPDATE disponibilidad Set Disponible = Disponible - '$galones', Gastado = Gastado + '$galones' WHERE ID=1";

// $ejecutarupdate = mysqli_query($link,$_UPDATE_SQL);

if(!$ejecutarInsert){
  echo"Error en la lineacarslist";
}else{
  echo"Los datos se insertaron";
}

header('Location:../vehiculos.html');


?>



