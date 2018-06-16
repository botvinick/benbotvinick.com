<?php
  $data = fopen("data.txt", "w");
  $rating = $_POST["rating"] + "\n";
  fwrite($data, $rating);
  fclose($data);
?>
