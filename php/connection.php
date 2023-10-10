<?php
$servername = "your_servername";
$database = "your_database";
$username = "your_username";
$password = "your_password";

$connection = new mysqli($servername, $username, $password, $database);

if ($connection->connect_error) {
    die("Connection failed: " . $connection->connect_error);
}

?>