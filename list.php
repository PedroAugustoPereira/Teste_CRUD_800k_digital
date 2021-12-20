<?php
    require_once('conexao.php'); //conexão com o banco
    require_once('verificar_login.php'); //verificar se existe a sessão de login
    

    $users_list = mysqli_query($connect, "SELECT *FROM cadastros"); //recupera os dados da tablea da cadastros

    while($data=mysqli_fetch_array($users_list)){
        //enviar dados da tabela para o painel
        echo "<tr><td>".$data[1]."</td><td>".$data[2]."</td><td>".$data[3]."</td><td>".$data[4]."</td><td><a class='lixeira' id='$data[0]'><img  src='imagens/delete.png' alt='deletar'></a><a class='icon_editar' id='$data[0]'><img src='imagens/icon_edit.png' alt='editar'/></a></td></tr>";
    }
?> 