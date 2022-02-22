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

if(isset($_POST['registrarC'])){
  $nombre =($_POST["nombre"]);
  $cedula =$_POST["cedula"];
  $tarjeta =$_POST["tarjeta"];
  $limCredito =$_POST["limCredito"];
  $tPersona =$_POST["tPersona"];
  $estado =$_POST["estado"];
}

$insertarDatos = "INSERT INTO clientes VALUES('NULL',
                                                '$nombre',
                                                '$cedula',
                                                '$tarjeta',
                                                '$limCredito',
                                                '$tPersona',
                                                '$estado')";

$ejecutarInsert = mysqli_query($link,$insertarDatos);

if($_FILES["imagen"] ["error"]>0){
  echo "Error al cargar el archivo.";
}
$ruta = "../source/images/clientes/fotosPerfil";
$archivo = $ruta.$_FILES["imagen"]["name"];
$sourceFoto = $_FILES["imagen"] ["tmp_name"];

$explode = explode('.', $archivo);
$extensionImagen = array_pop($explode);
$newName = $cedula.'.'.$extensionImagen;
$fotoPerfil = $ruta.'/'.$newName;

$resultado = @move_uploaded_file($sourceFoto, $fotoPerfil);




// $_UPDATE_SQL = "UPDATE disponibilidad Set Disponible = Disponible - '$galones', Gastado = Gastado + '$galones' WHERE ID=1";

// $ejecutarupdate = mysqli_query($link,$_UPDATE_SQL);

if(!$ejecutarInsert){
  echo"Error en la lineacarslist";
}else{
  echo"Los datos se insertaron";
}

header('Location:../clientes.html');


?>