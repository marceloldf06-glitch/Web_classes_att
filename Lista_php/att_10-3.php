<?php
$nome = $_POST['nome'];
$email = $_POST['email'];
$peso = $_POST['peso'];
$alt = $_POST['alt'];
$imc = $peso/($alt * $alt);
$imc = number_format($imc, 2);
echo "Nome: $nome<br>
E-mail: $email<br>
peso: $peso<br>
Altura: $alt<br>
IMC: $imc<br>";
?>