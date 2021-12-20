<?php
    require_once('conexao.php'); //CONECÃO COM BANCO
    require_once('verificar_login.php'); //ARQUIVO DE VERIFICÃO DE SESSÃO
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <!--META TAGS-->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--FIM DE METATGS-->

    
    <link  rel="stylesheet" type="text/css" href="css/painelStyle.css"/> <!--CSS-->


    <!--LINK JQUERY-->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <title>Painel</title>

</head>
<body>
    

    <header>
        
        <div class="box">
            <div class="msg">
                <h2>Bem vindo(a)!</h2>
            </div><!--box-->
            
            <div class="sair">
                <h2><a href='logout.php'>Sair</a></h2><!--chama arquivo php de logout-->
            </div><!--sair-->
        </div><!--box-->
        <div class="clear"></div>
    </header><!--header--> 

    <div class="container">
        <div class="content">
            <section class="listagem">
                
                <div class="table">
                    <table >
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Email</th>
                                <th>Senha</th>
                                <th>Endereço</th>
                            </tr>
                        </thead><!--thead-->

                        <tbody></tbody><!--TABELA VINDA DO BANCO DE DADOS SERÁ EXIBIDA AQUI-->

                    </table><!--tag table-->
                </div><!--table-->
                <div class="confirm-delete">
                    <h3>Tem certeza que deseja apagar o usuário ?</h3>
                    <button id="confirmar">Sim</button>
                    <button id="cancelar" >Cancelar</button>
                </div><!--confirm-delete-->
            </section><!--listagem-->

            
            <section class="editar">
                    
                    <div class="edit_fechar">
                        <button class="fechar" id="btn_fechar"><img src="imagens/fechar.png" /></button>
                    </div><!--editar-->
                    
                    <h2 class="title">EDITAR</h2>
                    <form method="post">
                        
                        <div class="input nome">
                            <h3>Nome completo</h3>
                            <input type="text" name="nome" id="nome_editar" autocomplete="off"/>
                        
                        </div><!--input nome-->
                        <br>
                        <div class="input email">
                            <h3>Email</h3>
                            <input type="email" name="email" id="email_editar" autocomplete="off"/>
                        </div><!--input email-->
                        <br>
                        <div class="input endereco">
                            <h3>Endereço</h3>
                            <input type="text" name="endereco" id="endereco_editar" autocomplete="off"/>
                        </div><!--input endereco-->
                        <br>
                        <div class="input senha">
                            <h3>Senha</h3>
                            <input type="text" name="senha" id="senha_editar" autocomplete="off"/>
                        </div><!--input senha-->
                        <div class="mostrar">
                            <input type="checkbox" onclick="senha_trocar_edit()" />
                            <p>Mostrar senha</p>
                        </div><!--mostrar-->
                        <div class="submit">
                            <input type="button" name="editar" value="Confirmar edição" id="btn_editar"/>
                        </div><!--submit-->
                        
                    </form><!--form de edição de usuários-->
            </section><!--editar-->
        </div><!--content-->
    </div><!--container-->

    <!--SCRIPTS-->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="js/edit_list.js"></script>
</body>
</html>

