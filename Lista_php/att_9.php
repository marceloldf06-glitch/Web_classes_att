<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="post">
    texto: <input type="text" name="str"><br>
<input type="submit">
</form>
</body>
</html>

<?php
if(isset($_POST['str'])){
$str = $_POST['str'];
function checa($str) {
    $str = strtolower($str);
    echo strlen($str);
    $str_reverse =  strrev($str);
    if($str == $str_reverse){

        echo "<br>Palindrome";

    } else {

        echo "<br>Not Palindrome"; 

    }
    $str_separada = str_split($str);
    $v = 0;
    $c = 0;
    function vc($l){
    switch ($l){
        case"a":
        case"e":
        case"i":
        case"o":
        case"u":
        return 1;
        break;
        default:
        return 0;
        
    }
    }
    foreach($str_separada as $l){
        if(vc($l) == 1){
            $v++;
        }else{
            $c++;
        }
    }
    echo "<br>vogais: ".$v;
    echo "<br>consoantes: ".$c;
}
checa($str);
}
?>