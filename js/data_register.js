

//controle de clique em botçao de cadastrar usuáriorio

$('#btn_cadastrar').on("click", () => {
    var flag_nome = 0, flag_email = 0, flag_endereco = 0, flag_senha = 0; // variaveis de validação de inputs

    
    //variáveis de valores dos inputs
    var string_name = $("#nome_registro").val();
    var string_email = $("#email_registro").val();
    var string_senha = $("#senha_registro").val();
    var string_endereco = $("#endereco_registro").val();

    if(string_name != ""){
        flag_nome = 1;
    }
    else{
        flag_nome = 0;
    }

    if(string_email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
        flag_email = 1;
    }
    else{
        flag_email = 0;
    }
        
    if(string_endereco != ""){
        flag_endereco = 1;
    }
    else{
        flag_endereco = 0;
    }

    if(string_senha.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,50}$/)){
        flag_senha = 1;
    }
    else{
        flag_senha = 0;
    }

    

    if(flag_nome && flag_senha && flag_endereco && flag_email)
    {

        //requisição de cadastro de usuário
        $.ajax({
            url: "cadastro.php",
            type: "post",
            data:{
                nome_registro: string_name, 
                email_registro: string_email,
                senha_registro: string_senha,
                endereco_registro: string_endereco,
            },
            beforeSend: () => {
            },
            success: function(msg){
                alert("Usuário cadastrado com sucesso");

                $(".cadastrar").fadeOut(200, function(){
                    $('.logar').fadeIn(200, function(){
                        document.getElementById("nome_registro").value = "";
                        document.getElementById("email_registro").value = "";
                        document.getElementById("endereco_registro").value = "";
                        document.getElementById("senha_registro").value = "";
                    })
                });
            }
        }).done((e) => {
        })
    }
    else{
        //ação caso algum input seja invalido
        if(!flag_nome){
            $('#nome_registro').css("color", "red");
            document.getElementById("nome_registro").value = "Nome completo inválido";
        }
        if(!flag_email){
            $('#email_registro').css("color", "red");
            document.getElementById("email_registro").value = "Email inválido";
        }
        if(!flag_endereco){
            $('#endereco_registro').css("color", "red");
            document.getElementById("endereco_registro").value = "endereco inválido";
        }
        if(!flag_senha){
            $('#senha_registro').css("color", "red");
            document.getElementById("senha_registro").value = "Senha inválida";
            alert("A senha deve conter no mínimo 8 caracteres, sendo letras maiúsculas, minúsculas e númeoros");
        }
    }
})



