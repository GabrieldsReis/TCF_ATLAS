<?php
header("Access-Control-Allow-Origin:*");
$username = "root";
$servername = "localhost";
$dbname = "tcc_atlas";
$password = "";


$conn = new mysqli($servername,$username,$password,$dbname);
if ($conn->connect_error){
    die("Falha ao conectar " . $conn -> connect_error);
}
// $Id = $_POST["Id"];
$Remetente = $_POST["Remetente"];
$Destinatario = $_POST["Destinatario"];
$Mensagem = $_POST["Mensagem"];

$conn ->query("INSERT INTO mensagens (Remetente,Destinatário,Mensagem) VALUES ('$Remetente','$Destinatario','$Mensagem')") or die($conn->error);


?>