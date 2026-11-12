<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="post">
    primeiro ponto: <input type="number" name="p1"><br>
    segundo ponto: <input type="number" name="p2"><br>
    terceiro ponto: <input type="number" name="p3"><br>
<input type="submit">
</form>
</body>
</html>




<?php
if(isset($_POST['p1']) && isset($_POST['p2']) && isset($_POST['p3'])){
$p1 = (int)$_POST['p3'];
$p2 = (int)$_POST['p2'];
$p3 = (int)$_POST['p1'];

if($p1*$p2 > $p3 || $p1*$p3 > $p2 || $p2*$p3 > $p1)
if($p1 == $p2 && $p2 == $p3){
echo "Equilátero";
} elseif ($p1 == $p2 || $p1 == $p3 || $p2 == $p3) {
echo "Isóceles";
} else{
echo "Escaleno";
}
}else{
echo "não é um triangulo";
}
?>