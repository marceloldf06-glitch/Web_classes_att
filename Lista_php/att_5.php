<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="post">
    Minimo: <input type="number" name="min"><br>
    Maximo: <input type="number" name="max"><br>
<input type="submit">
</form>
</body>
</html>




<?php
if(isset($_POST['min']) && isset($_POST['max'])){
$min = (int)$_POST['min'];
$max = (int)$_POST['max'];
function randomize($min, $max) {
    echo rand($min, $max);
}
randomize($min, $max);
}
?>