<?php

$username = "root";
$servername = "localhost";
$dbname = "tcc_atlas";
$password = "";


$conn = new mysqli($servername,$username,$password,$dbname);
if ($conn->connect_error){
    die("Falha ao conectar " . $conn -> connect_error);
}
$texto = $_POST["texto"];



if (isset($_FILES['fileUpload'])){
$arquivo = $_FILES['fileUpload'];
var_dump($_FILES['fileUpload']);

if ($arquivo['error'])
die("Falha ao enviar o arquivo");

if ($arquivo['size'] > 2097152)
die("Arquivo muito grande !! Max: 2MB");

$pasta = "arquivos/";
$NomeDoArquivo = $arquivo['name'];
$NovoNomeDoArquivo = uniqid();
$extensao = strtolower(pathinfo($NomeDoArquivo, PATHINFO_EXTENSION));

if($extensao != "jpg" && $extensao != "png")
die("Tipo de arquivo nao aceito");

$path = $pasta . $NovoNomeDoArquivo . "." . $extensao;

$deu_certo = move_uploaded_file($arquivo["tmp_name"], $path);

if($deu_certo){
    $conn ->query("INSERT INTO postagens (imagem,texto) VALUES ('$path','$texto')") or die($conn->error);
}  else{
    echo "<p>Falha ao enviar o arquivo</p>";
}


echo(var_dump($arquivo["tmp_name"]));
echo $pasta . $NovoNomeDoArquivo . "." . $extensao;
echo $deu_certo;

}
?>