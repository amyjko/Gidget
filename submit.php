<?php 

	// Report all errors
	error_reporting(-1);

	// Get the JSON to save
	$data = $_POST["data"];

	// Generate a unique ID
	$id = uniqid();

	$myFile = "results/" . $id . ".json";
	$fh = fopen($myFile, 'w') or die("can't open file");
	fwrite($fh, $data);
	fclose($fh);

	echo "Saved.";

?>