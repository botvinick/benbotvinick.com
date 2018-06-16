<?php

function Connect()
{
 $dbhost = "localhost";
 $dbuser = "biggomeg_admin";
 $dbpass = file_get_contents("../../.sqlpass");
 $dbname = "biggomeg_project_data";

 // Create connection
 $conn = new mysqli($dbhost, $dbuser, $dbpass, $dbname) or die($conn->connect_error);

 return $conn;
}
 
?>