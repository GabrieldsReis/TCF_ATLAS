
<?php 
$username = "root";
$servername = "localhost";
$dbname = "tcc_atlas";
$password = "";

//caminhos do php

echo var_dump($_POST);
//mostra os dados do usuario

$conn = new mysqli($servername,$username,$password,$dbname);


if ($conn->connect_error){
    die("Falha ao conectar " . $conn -> connect_error);
}

// se houver conexao ao sevidor

$nome = $_POST["nome"];
$idade = $_POST["idade"];
$email = $_POST["email"];
$senha = $_POST["senha"];

//salvar os dados as variaveis

$cmdSql = "
INSERT INTO usuarios(Nome,Idade,Email,Senha)
VALUES ('$nome','$idade','$email','$senha')";

echo $cmdSql;
if($conn -> query($cmdSql) === TRUE){
    echo("Cadastro Concluido!");
} else{ 
    echo("Erro no cadastro em " . $conn->error); //motivo do erro

}

$conn->close();
?>

