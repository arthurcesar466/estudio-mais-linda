<?php

ob_start(); // Inicia o buffer de saída

if(isset($_POST["submit"]))
{
  include_once ('config.php');
   
  $nome = $_POST["nome"];
  $email = $_POST["email"];
  
  // Verifica se 'numero' está definido
  if (isset($_POST["numero"])) {
      $numero = $_POST["numero"];
  } else {
      $numero = null; // ou algum valor padrão
  }

  // Verifica se 'data_nasc' está definida e formata a data corretamente
  if (isset($_POST["data_nasc"]) && !empty($_POST["data_nasc"])) {
      $data_nasc = date('Y-m-d', strtotime($_POST["data_nasc"]));
  } else {
      $data_nasc = null; // ou algum valor padrão
  }
  
  $result = mysqli_query($conexao, "INSERT INTO usuarios(nome, email, numero, data_nasc) VALUES ('$nome', '$email', '$numero', '$data_nasc')");

  if($result){
    echo "Dados inseridos com sucesso! Você será redirecionado em 3 segundos.";
    echo '<meta http-equiv="refresh" content="3;url=home.php">';
  } else {
    echo "Erro ao inserir dados: " . mysqli_error($conexao);
  }
}

ob_end_flush(); // Envia o buffer de saída e desativa o buffer
?>


<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles/form.css">
    <title>Studio Mais Linda</title>
</head>
<body>
    <div class="box">
        <form action="index.php" method="POST">
            <fieldset>
                <legend><b>Studio Mais Linda</b></legend>
                <br>
                <div class="inputBox">
                    <input type="text" name="nome" id="nome" class="inputUser" required>
                    <label for="nome" class="labelInput">Nome completo</label>
                </div>
                <br><br>
                <div class="inputBox">
                    <input type="text" name="email" id="email" class="inputUser" required>
                    <label for="email" class="labelInput">Email</label>
                </div>
                <br><br>
                <div class="inputBox">
                    <input type="tel" name="numero" id="numero" class="inputUser" required>
                    <label for="telefone" class="labelInput">Telefone</label>
                </div>
           
                <label for="data_nascimento"><b>Data de Nascimento:</b></label>
                <input type="date" name="data_nasc" id="data_nascimento" required>
                <br><br>
    
                <br><br>
               <button class="btn" id="btn" type="submit" name="submit">Enviar</button>
            </fieldset>
        </form>
    </div>
</body>
</html>