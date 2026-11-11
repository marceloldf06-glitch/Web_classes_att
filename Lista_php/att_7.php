<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="post">
    Número: <input type="number" name="num"><br>
<input type="submit">
</form>
</body>
</html>

<?php
if(isset($_POST['num'])){
$num = (int)$_POST['num'];
function tab($num) {
    for($i = 1; $i <= 10; $i++){
        echo ($num*$i)."<br>";
    };
}
tab($num);
}
?>