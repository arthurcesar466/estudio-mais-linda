<?php 
$dbHost = "localhost";
$dbUsername= "root";
$dbPassword= "";
$dbName =   "form";

$conexao = new mysqli($dbHost, $dbUser, $dbPassword, $dbName);
if ($conexao->connect_errno) 
{
    echo "erro";
}

else 
{
    echo "Conexão Efetuada com sucesso";
}

