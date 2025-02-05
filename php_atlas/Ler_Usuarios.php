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


$Postagens =  "SELECT * FROM usuarios" ; 

$resultado = $conn -> query($Postagens);
$myArray = array();
while($row = $resultado->fetch_assoc()){
    $myArray[] = $row;
}
echo json_encode($myArray);






// while ($row = $resultado->fetch_assoc()) {
//     echo $row['Nome']."<br>";
// }



$conn->close();//fecha a conexao
?>