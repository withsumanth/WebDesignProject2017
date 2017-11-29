<?php
$server = "localhost";
$username = "root";
$pass = "";
$dbName = "user";
$data = json_decode(file_get_contents("php://input"));

$conn = new mysqli($server,$username,$pass,$dbName);
$sql = "INSERT INTO USERDETAILS (username, email, password)
VALUES ('$data->username', '$data->email', '$data->password')";
$result = $conn->query($sql);
$conn->close();
?>