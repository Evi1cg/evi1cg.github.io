<?php
$payload = $_GET['id'];
$a[0] = "s:".strlen($payload).":\"".$payload."\"";
echo $a[0];
echo "<br>";
echo urlencode($a[0]);
?>
