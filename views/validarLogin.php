<?php

$usuario=$_POST['user'];
$password=$_POST['pass'];
session_start();
$_SESSION['user']=$usuario;

include('conection.php');

$consulta="SELECT*FROM usuarios where user='$usuario' and userpassword='$password'";

$resultado = mysqli_query($link,$consulta);

$filas=mysqli_num_rows($resultado);

 if($filas){
    header("location:../home.html");
  }else{
    header("location:../index.html");
     }
mysqli_free_result($resultado);
mysqli_close($link);

?>