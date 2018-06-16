<?php

require 'connection.php';
$conn = Connect();

// Get message info
$message = $conn->real_escape_string($_POST['message']);

// Write to the database
$query = "INSERT into messages (message) VALUES('" . $message . "')";
$success = $conn->query($query);
$conn->close();

// Return to homepage
header('Location: /#message');

?>