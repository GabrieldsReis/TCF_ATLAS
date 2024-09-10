
<?php 
$username = "root";
$servername = "localhost";
$dbname = "tcc_atlas";
$password = "";


echo var_dump($_POST);

$conn = new mysqli($servername,$username,$password,$dbname);


if ($conn->connect_error){
    die("Falha ao conectar " . $conn -> connect_error);
}

$nome = $_POST["nome"];
$idade = $_POST["idade"];
$email = $_POST["email"];
$senha = $_POST["senha"];


$cmdSql = "
INSERT INTO usuarios(Nome,Idade,Email,Senha)
VALUES ('$nome','$idade','$email','$senha')";

echo $cmdSql;
if($conn -> query($cmdSql) === TRUE){
    echo("Cadastro Concluido!");
} else{ 
    echo("Erro no cadastro em " . $conn->error);

}

$conn->close();
?>

