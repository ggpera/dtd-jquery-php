<?php
include('connection.php');

if(isset($_POST['task'])) {
    $task = $_POST['task'];
    $query = "INSERT INTO tasks (task) VALUES (?)";
    $stmt = $connection->prepare($query);

    $stmt->bind_param("s", $task);
    $stmt->execute();
}

$connection->close();
?>