<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="post">
    Número: <input type="text" name="num"><br>
<input type="submit">
</form>
</body>
</html>

<?php
if(isset($_POST['num'])){
$num = $_POST['num'];
function soma($num) {
    $nums = explode(" ", $num);
    global $soma;
    global $maior = PHP_INT_MIN;
    global $menor = PHP_INT_MAX;
    foreach($nums as $numes){
        $soma += $numes;
        if($numes > $maior){
            $maior = $numes;
        };
        if($numes < $menor){
            $menor = $numes;
        };
    };
    echo "Soma: ".$soma;
    echo "Maior: ".$maior;
    echo "Menor: ".$menor;

}
soma($num);
}
?>
