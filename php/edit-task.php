<?php 
include('connection.php');

if(isset($_POST['id']) && isset($_POST['task'])) {
    $id = $_POST['id'];
    $task = $_POST['task'];
    
    $query = "UPDATE tasks SET task = ? WHERE id = ?";
    $stmt = $connection->prepare($query);

    $stmt->bind_param('si', $task, $id);
    $stmt->execute();
    $stmt->close();
}

$connection->close();
?>