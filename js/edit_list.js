var flag_nome = 0, flag_email = 0, flag_endereco = 0, flag_senha = 0; //VARIÁVEIS PARA VERIFICAÇÃO DE INPUT
var id_array = document.getElementsByClassName('lixeira'); //ARRAY DE ELEMENTOS COM ID DE USUARIO PARA DELETAR O QUE FOR CLICADO
var edit_array; //ARRAY DE ELEMTNOS COM ID DE USUARIO PARA EDITAR O QUE FOR CLICADO
var id_request;

// ASSIM QUE INICAR A PAGINA

$(window).on('load', function(){
    requestPrintList(); //printar a lista de usuários
    controlEdit(); //Controle da tela de edição
    controlDelete(); //Controle da tele de delete
    verificInput(); //verificação de inputs de edição
})
    

//FUNÇÃO DE CONTROLE AVISOS DE DELETE

function controlDelete(){         
    $(".confirm-delete #confirmar").on("click", function(){
        requestDeleteUser(id_request);
        $(".confirm-delete").fadeOut(200);
    }); 

    $(".confirm-delete #cancelar").on("click", function(){
        $(".confirm-delete").fadeOut();
    });             
}

//FUNÇÃO DE CONTROLE E AVISOS DE EDIÇÃO

function controlEdit(){
   $("#btn_editar").on("click", function(){
        controlInput();
        requestEdit(id_request);

        if(flag_nome && flag_senha && flag_endereco && flag_email){
            $(".editar").fadeOut(200, function(){
                $(".listagem").fadeIn(200, resetInput());
            })  
        }
    })
    $("#btn_fechar").on("click", function(){
        $(".editar").fadeOut(200, function(){
            $(".listagem").fadeIn(200, resetInput());
        })
    })
}


//FUNÇÃO DE REQUISIÇÃO POR AJAX PARA EXLUIR USUÁRIO

function requestDeleteUser(id_user){
    $.ajax({
        url: 'delete.php',
        type: 'post',
        data: {
            id: id_user,
        },
        beforeSend: () => {
        },
        success: (msg) => {
            if(parseInt(msg) == parseInt(id_user)){
                alert("Você apagou o usuário da sessão atual");
                window.location.href = 'logout.php';
            }
            
            requestPrintList();            
        },
        error: (msg) => {
            alert("Erro na consulta");
        }
    }).done((e) => {
    });
}

//FUNÇÃO DE REQUISIÇÃO POR AJAX PARA EDITAR USUÁRIO

function requestEdit(id_user){
    var string_name = $("#nome_editar").val();
    var string_email = $("#email_editar").val();
    var string_senha = $("#senha_editar").val();
    var string_endereco = $("#endereco_editar").val();

    if(flag_nome && flag_senha && flag_endereco && flag_email){
        $.ajax({
            url: "editar.php",
            type: "post",
            data:{
                nome_editar: string_name, 
                email_editar: string_email,
                senha_editar: string_senha,
                endereco_editar: string_endereco,
                id: id_user,
            },
            beforeSend: () => {
            },
            success: function(msg){
                alert("Edição realizada com sucesso");
                requestPrintList();
            }
        }).done((e) => {
        })
    }
    else{
        if(!flag_nome){
            $('#nome_editar').css("color", "red");
            document.getElementById("nome_editar").value = "Nome completo inválido";
        }
        if(!flag_email){
            $('#email_editar').css("color", "red");
            document.getElementById("email_editar").value = "Email inválido";
        }
        if(!flag_endereco){
            $('#endereco_editar').css("color", "red");
            document.getElementById("endereco_editar").value = "endereco inválido";
        }
        if(!flag_senha){
            $('#senha_editar').css("color", "red");
            document.getElementById("senha_editar").value = "Senha inválida";
            alert("A senha deve conter no mínimo 8 caracteres, sendo letras maiúsculas, minúsculas e númeoros");
        }
    }
}

//FUNÇÃO DE REQUISIÇÃO POR AJAX PARA IMPRIMIR A TABELA NA TELA

function requestPrintList(){
    $.ajax({
        url: 'list.php',
        type: 'post',
        beforeSend: () => {
        },
        success: (msg) => {
            $('tbody').html(msg);
            id_array = document.getElementsByClassName('lixeira');
            edit_array = document.getElementsByClassName('icon_editar')
            var i = 0;
            

            //CONTROLE DE CLIQUE EM APAGAR
            for(i = 0 ; i < id_array.length ; i++){
                id_array[i].addEventListener("click", function(){
                    id_request = this.getAttribute('id');

                    $(".confirm-delete").fadeIn(200);
                })
            }
            

            //CONTROLE DE CLIQUE EM EDITAR
            for(i = 0 ; i < edit_array.length ; i++){
                edit_array[i].addEventListener("click", function(){
                    id_request = this.getAttribute('id');
                    $('.listagem').fadeOut(200, function(){
                        $('.editar').fadeIn(200);
                    })
                }) 
            }
        },
    }).done((e) => {
    })
}

//controle de inputs de edição

function controlInput(){
    var string_name = $("#nome_editar").val();
    var string_email = $("#email_editar").val();
    var string_senha = $("#senha_editar").val();
    var string_endereco = $("#endereco_editar").val();

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


}

//resetar os inputs caso o usuario não prossiga

function resetInput(){
    document.getElementById("nome_editar").value = "";
    document.getElementById("email_editar").value = "";
    document.getElementById("endereco_editar").value = "";
    document.getElementById("senha_editar").value = "";
}


//verificar erros do usuario nos inputs

function verificInput(){
    $('#nome_editar').on('click', function(){
        if(document.getElementById("nome_editar").style.color == 'red'){
            document.getElementById("nome_editar").value = "";
            document.getElementById("nome_editar").style.color = '#07020D';
        }
    })
    $('#email_editar').on('click', function(){
        if(document.getElementById("email_editar").style.color == 'red'){
            document.getElementById("email_editar").value = "";
            document.getElementById("email_editar").style.color = '#07020D';
        }
    })
    $('#endereco_editar').on('click', function(){
        if(document.getElementById("endereco_editar").style.color == 'red'){
            document.getElementById("endereco_editar").value = "";
            document.getElementById("endereco_editar").style.color = '#07020D';
        }
    })
    $('#senha_editar').on('click', function(){
        if(document.getElementById("senha_editar").style.color == 'red'){
            document.getElementById("senha_editar").value = "";
            document.getElementById("senha_editar").style.color = '#07020D';
        }
    })
}

//função de exibir ou esconder senha na edição

function senha_trocar_edit(){
    if(document.getElementById("senha_editar").type =="password"){
        document.getElementById("senha_editar").type= 'text'
    }
    else{
        document.getElementById("senha_editar").type ='password';
    }
}