<?php
include('connection.php');

$query = "SELECT * FROM tasks";
$result = $connection->query($query);

$tasks = array();

if ($result) {
    while ($row = $result->fetch_assoc()) {
        $tasks[] = array(
            'id' => $row['id'],
            'task' => $row['task']
        );
    }
}
// Encode the array as JSON and send it as a response
header('Content-Type: application/json');
echo json_encode($tasks);

$connection->close();
?>