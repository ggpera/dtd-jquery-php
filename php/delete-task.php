<?php 
include('connection.php');

if(isset($_POST['id'])) {
    $id = $_POST['id'];
    $query = "DELETE FROM tasks WHERE id = ?";
    $stmt = $connection->prepare($query);

    $stmt->bind_param("i", $id);
    $stmt->execute();
}

$connection->close();
?>