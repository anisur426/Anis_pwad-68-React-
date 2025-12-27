<?php
include_once("../db_config.php");
//echo "hello";
$data = file_get_contents("php://input");
$data = json_decode($data);
print_r($data);
//$title= $data->tile;
echo $data->title;

//$details= $data->details;
echo $data->details;
$db->query("INSERT INTO blogs VALUES (NULL,'$title','$details')");
if ($db->affected_rows) {
    echo "Successfully Inserted";
}
