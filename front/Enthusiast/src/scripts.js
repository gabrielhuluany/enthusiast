const url_user = `http://localhost:8080/user/`;
const url_product = `http://localhost:8080/product/`;
var userLogado = localStorage.getItem('user');

window.onload = mudarNome;

function mudarNome() {

    if (userLogado != null) {
        document.getElementById("username").innerHTML = userLogado;
    }

    if (userLogado == null) {
        document.getElementById("username").innerHTML = "Entre ou Cadastre-se";
    }
}

function mudarRota() {

    if (userLogado != null) {
        window.location.href = "http://localhost:4200/account";
    }

    if (userLogado == null) {
        window.location.href = "http://localhost:4200/login";
    }
}

if ((window.location.href == "http://localhost:4200/login" && userLogado != null) ||
    (window.location.href == "http://localhost:4200/account" && userLogado == null) ||
    (window.location.href == "http://localhost:4200/account_data" && userLogado == null) ||
    (window.location.href == "http://localhost:4200/account_password" && userLogado == null) ||
    (window.location.href == "http://localhost:4200/account_logout" && userLogado == null)) {
    mudarRota();
}

function login() {

    const txtUserLogin = document.getElementById("txtUserLogin").value.trim();
    const txtSenhaLogin = document.getElementById("txtSenhaLogin").value.trim();

    //console.log(txtUserLogin, txtSenhaLogin);

    const options = {
        method: 'POST',
        mode: 'cors',
        cache: 'default',
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
            user: txtUserLogin,
            senha: txtSenhaLogin,
        }),
    }

    fetch(url_user.concat(`logIn`), options)
        .then(response => {response.text()
            .then(data => tratarErroLogin(data, txtUserLogin))
        })
        .catch(error => console.log('Deu Erro: '+ error))
}

function tratarErroLogin(data, txtUserLogin) {
    //console.log("Retorno da api: " + data);
    if(data == "Credenciais Incorretas") {
        alert("Usuário ou senha incorretos!");
    }

    if(data == "Credenciais Corretas") {
        userLogado = txtUserLogin;
        localStorage.setItem('user', userLogado);
        alert("Bem-vindo de volta, " + userLogado + "!");
        //console.log(userLogado);
        window.location.href="http://localhost:4200/account";
        mudarNome();
    }
}

function cadastrar() {

    const txtUserCadastro = document.getElementById("txtUserCadastro").value.trim();
    const txtSenhaCadastro = document.getElementById("txtSenhaCadastro").value.trim();
    const txtConfirmarSenhaCadastro = document.getElementById("txtConfirmarSenhaCadastro").value.trim();
    const txtEmailCadastro = document.getElementById("txtEmailCadastro").value.trim();
    const txtNomeCadastro = document.getElementById("txtNomeCadastro").value.trim();

    //console.log(txtUserCadastro, txtSenhaCadastro, txtConfirmarSenhaCadastro, txtNomeCadastro, txtEmailCadastro);

    if (txtUserCadastro == "" || txtSenhaCadastro == "" || txtConfirmarSenhaCadastro == "" || txtNomeCadastro == "" || txtEmailCadastro == "") {
        alert("Preencha todos os campos!");
        return;
    }

    if (txtSenhaCadastro == txtConfirmarSenhaCadastro) {
        const options = {
            method: 'POST',
            mode: 'cors',
            cache: 'default',
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({
                nome: txtNomeCadastro,
                email: txtEmailCadastro,
                senha: txtSenhaCadastro,
                user: txtUserCadastro
            }),
        }

        fetch(url_user.concat(`add`), options)
            .then(response => {response.text()
                .then(data => tratarErroCadastrar(data))
            })
            .catch(error => console.log('Deu Erro: '+ error))
    } else {
        alert("Confirmação da senha incorreta!");
    }
}

function tratarErroCadastrar(data) {
    //console.log("Retorno da api: " + data);
    if(data == "Erro: Email/User já cadastrados") {
        alert("Email ou usuário já cadastrados.");
    }

    if(data == "Cadastro realizado com sucesso") {
        alert("Usuário cadastrado com sucesso!");
        document.getElementById("txtNomeCadastro").value = "";
        document.getElementById("txtEmailCadastro").value = "";
        document.getElementById("txtUserCadastro").value = "";
        document.getElementById("txtSenhaCadastro").value = "";
        document.getElementById("txtConfirmarSenhaCadastro").value = "";
    }
}

function receberDados() {

    const options = {
        method: 'POST',
        mode: 'cors',
        cache: 'default',
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
            user: userLogado
        }),
    }

    fetch(url_user.concat(`dados`), options)
        .then(response => {response.text()
            .then(data => preencherDados(data))
        })
        .catch(error => console.log('Deu Erro: '+ error))
}

function preencherDados(data) {
    if(!data) return
    data = data.replace('[', '').replace(']', '').replaceAll('"', '');
    var separado = data.split(',');
    document.getElementById("txtUserDados").value = userLogado;
    document.getElementById("txtNomeDados").value = separado[0];
    document.getElementById("txtEmailDados").value = separado[1];
}

function excluirConta() {

    var confirmaSenha = prompt("Digite sua senha para confirmar a exclusão da conta", "");

    if (confirmaSenha == null || confirmaSenha == "") {
        alert("Exclusão da conta cancelada!");
    } else {
        const options = {
            method: 'DELETE',
            mode: 'cors',
            cache: 'default',
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({
                user: userLogado,
                senha: confirmaSenha
            }),
        }

        fetch(url_user.concat(`del`), options)
            .then(response => {response.text()
                .then(data => tratarErroExcluirConta(data))
            })
            .catch(error => console.log('Deu Erro: '+ error))
      }

    confirmaSenha = "";
}

function tratarErroExcluirConta(data) {
    //console.log("Retorno da api: " + data);

    if(data == "Conta deletada") {
        alert("Conta excluída com sucesso!");
        userLogado = "";
        localStorage.removeItem('user');
        window.location.href="http://localhost:4200";
    }

    if(data == "erro 404") {
        alert("Erro ao deletar a conta.");
    }

    if(data == "Senha incorreta") {
        alert("Senha incorreta. Exclusão da conta cancelada!");
    }
}

function atualizarSenha() {

    const txtSenhaAtualAtt = document.getElementById("txtSenhaAtualAtt").value.trim();
    const txtSenhaNovaAtt = document.getElementById("txtSenhaNovaAtt").value.trim();
    const txtConfirmaSenhaNovaAtt = document.getElementById("txtConfirmaSenhaNovaAtt").value.trim();

    //console.log(userLogado, txtSenhaAtualAtt, txtSenhaNovaAtt, txtConfirmaSenhaNovaAtt);

    if(txtSenhaNovaAtt == "") {
        alert("A senha não pode ser nula.");
        return;
    }

    if (txtSenhaNovaAtt == txtConfirmaSenhaNovaAtt) {
        const options = {
            method: 'PATCH',
            mode: 'cors',
            cache: 'default',
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({
                user: userLogado,
                senha: txtSenhaAtualAtt,
                novaSenha: txtSenhaNovaAtt
            }),
        }

        var teste = "";

        fetch(url_user.concat(`attSenha`), options)
            .then(response => {response.text()
                .then(data => tratarErroAttSenha(data))
            })
            .catch(error => console.log('Deu Erro: '+ error))
    } else {
        alert("Confirmação da nova senha incorreta!");
    }
}

function tratarErroAttSenha(data) {
    //console.log("Retorno da api: " + data);

    if (data == "senha null") {
        alert("Senha atual null. Alteração de senha cancelada.");
    }

    if (data == "Senha atualizada") {
        alert("Senha alterada com sucesso!");
        window.location.href="http://localhost:4200/account";
    }

    if (data == "erro 404") {
        alert("Erro ao alterar a senha.");
    }

    if (data == "senha errada") {
        alert("Senha atual incorreta. Alteração de senha cancelada.");
    }
}

function sair() {

    localStorage.removeItem('user');
    userLogado = localStorage.getItem('user');
    //console.log(localStorage.getItem('user'), userLogado);
    alert("Volte sempre!");
    window.location.href="http://localhost:4200";
    mudarNome();
}

function receberProdutos() {

    const options = {
        method: 'POST',
        mode: 'cors',
        cache: 'default',
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
            id: "1"
        }),
    }

    fetch(url_product.concat(`all`), options)
        .then(response => {response.text()
          .then(data => preencherProdutos(data))
        })
        .catch(error => console.log('Deu Erro: '+ error))
}

function preencherProdutos(data) {
    if(!data) return
    console.log("Este é um teste:" + data)
    data = data.replace('[', '').replace(']', '').replaceAll('"', '');
    var separa = data.split(',');

    //if null tratar

    document.getElementById("nome_prod01").innerHTML = separa[0];
    document.getElementById("desc_prod01").innerHTML = separa[1];
    var preco_prod01 = parseFloat(separa[2]).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
    document.getElementById("preco_prod01").innerHTML = preco_prod01;
    document.getElementById("quant_prod01").innerHTML = separa[3] + " em estoque";
    document.getElementById("img_prod01").src = separa[4];

}
