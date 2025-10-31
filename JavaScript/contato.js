    var formulario = document.getElementById("formulario");
    var nome = document.getElementById("nome");
    var email = document.getElementById("email");
    var cpf = document.getElementById("cpf");
    var telefone = document.getElementById("telefone");
    var nascimento = document.getElementById("nascimento");
    var endereco = document.getElementById("endereco");
    var cep = document.getElementById("cep");
    var cidade = document.getElementById("cidade");
    var estado = document.getElementById("estado");

    formulario.addEventListener("submit", function(e) {
        e.preventDefault();
    
        const valorNome = nome.value.trim();
        const valorEmail = email.value.trim();
        const valorCPF = cpf.value.trim();
        const valorTelefone = telefone.value.trim();
        const valorNascimento = nascimento.value.trim();
        const valorEndereco = endereco.value.trim();
        const valorCEP = cep.value.trim();
        const valorCidade = cidade.value.trim();
        const valorEstado = estado.value.trim();
    

        if (valorNome == "" || valorEmail == "" || valorCPF == "" || valorTelefone == "" || valorNascimento == "" || valorEndereco == "" || valorCEP == "" || valorCidade == "" || valorEstado == "") {

            alert("Preenchimento incorreto!");
            return false;
        } else (valorCPF )

            alert("Formulário enviado com sucesso!");
    
});

const button = document.getElementById("button");
const modal = document.querySelector("dialog");
const buttonclose = document.querySelector("dialog button")

button.onclick = function () {
    modal.showModal()
}

buttonclose.onclick = function () {
    modal.close()
}

