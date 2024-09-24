<?php

header("Access-Control-Allow-Origin:*");
//Tag para iniciar o codigo php
$username = "root";  //variavel que sera o usuario do banco de dados
$servername = "localhost"; //endereco url do database
$dbname = "tcc_atlas"; //nome do banco de dados
$password = ""; //senha do banco de dados



$conn = new mysqli($servername,$username,$password,$dbname); //um caminho pra acessar o banco de dados

if($conn->connect_error){
    die("Falha ao conectar".$conn -> connect_error);
}// caso nao consiga acessar o banco de dados,ira apresentar o erro

$email = $_POST["email"];//salva o email e senha em variaveis
$senha = $_POST["senha"];

$Login =  "SELECT * FROM usuarios WHERE Email = '$email' AND Senha = '$senha'" ; 
//comando sql para buscar email e senha salvos na variavel
$resultado = $conn -> query($Login);
// echo($resultado->num_rows);


if($resultado->num_rows >0){

die("logado");

}

    else{
die("deslogado");

    }


// while ($row = $resultado->fetch_assoc()) {
//     echo $row['Nome']."<br>";
// }



$conn->close();//fecha a conexao
?>