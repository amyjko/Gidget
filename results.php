<html>

<head>
	<title>Gidget study results</title>

	<script type='text/javascript' src='lib/jquery.js'></script>
	
	<script type='text/javascript'>
	
	var results = {
	
	<?php 

		// Report all errors
		error_reporting(-1);
	
		function endsWith($haystack,$needle,$case=true) {
		    if($case){return (strcmp(substr($haystack, strlen($haystack) - strlen($needle)),$needle)===0);}
		    return (strcasecmp(substr($haystack, strlen($haystack) - strlen($needle)),$needle)===0);
		}
		
		$myDirectory = opendir("results/");
		
		// get each entry
		$indexCount = 0;
		while($entryName = readdir($myDirectory)) {
			$dirArray[] = $entryName;
			$indexCount++;
		}
		
		// close directory
		closedir($myDirectory);	
	
		$entries = array();
	
		for($index=0; $index < $indexCount; $index++) {
	        if(endsWith("$dirArray[$index]", ".json")) {
				$data = "";
				$filename = $dirArray[$index];
				$id = substr($filename, 0, strlen($filename) - 5);
				$file_handle = fopen("results/$filename", "r");
				if($file_handle === FALSE)
					exit("Couldn't open $filename");
				while (!feof($file_handle)) {
				   $line = fgets($file_handle);
				   $data = $data . $line;
				}
				fclose($file_handle);
				
				$entries[$id] = $data;
				
			}
		}
		
		
		foreach ( $entries as $id => $data )
			echo "'$id' : $data,\n";
	
	?>
	
	}
	
	function add(text) {
		$('#results').append(text + ",");
	}
	function line() {
		$('#results').append("\n");
	}
		
	function levelsCompleted(row) {
	
		var count = 0;
		for(var level in row.levelMetadata) {
			if(row.levelMetadata.hasOwnProperty(level)) {
				var data = row.levelMetadata[level];
				if(data.passed === true)
					count++;			
			}
		}
		return count;
	
	}
	
	function countSteps(row, kind) {

		var count = 0;
		for(var level in row.levelMetadata) {
			if(row.levelMetadata.hasOwnProperty(level)) {
				var data = row.levelMetadata[level];
				
				for(var i = 0; i < data.stepLog.length; i++) {
					if(data.stepLog[i].kind === kind)
						count++;
				}
			}
		}
		return count;
	}

	
	$(document).ready(function() {
	
		$('#results').append("id, condition, currentLevel, mturkcode, levelsCompleted,steps,lineSteps,plays,ends,\n"); 		
	
		var id, row;
		for(id in results) {
			if(results.hasOwnProperty(id)) {

				var row = results[id];				

				add(id);
				add(row.condition);
				add(row.currentLevel);
				add(row.code);
				add(levelsCompleted(row));
				add(countSteps(row, "step"));
				add(countSteps(row, "line"));
				add(countSteps(row, "play"));
				add(countSteps(row, "end"));
				line();
			
			}
		}
	
	});
	

	</script>

</head>
<body>

	<pre id='results'></pre>

</body>

</html>