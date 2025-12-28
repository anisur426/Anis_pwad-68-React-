<?php
include_once("../db_config.php");
$rawData = $db->query("SELECT * FROM blogs");
$output = [];
while ($row = $rawData->fetch_object()) {
    $output[] = $row;
};
echo json_encode($output);
