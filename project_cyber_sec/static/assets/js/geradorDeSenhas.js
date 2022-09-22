const inputSenha = document.querySelector("[data-input-senha]"); //HTML do input que apresentará a senha
const botaoGerar = document.querySelectorAll("[data-botao-gerar]"); //HTML do botão responsável por gerar a senha
const botaoCopiar= document.querySelector("[data-botao-copiar]"); //HTML do botão responsável por copiar a senha
const inputTamanhoDaSenha = document.querySelector("[data-input-tamanho]"); //HTML do input que define o tamanho da senha
const checkboxLetraMaiuscula = document.querySelector("[data-checkbox-maiuscula]"); //HTML do checkbox de letras maiúsculas
const checkboxLetraMinuscula = document.querySelector("[data-checkbox-miniscula]"); //HTML do checkbox de letras minúsculas
const checkboxNumero = document.querySelector("[data-checkbox-numero]"); //HTML do checkbox dos números
const checkboxCaracteresEspeciais = document.querySelector("[data-checkbox-caracteres]"); //HTML dos caracteres especiais

const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //Variável com todas as letras maiúsculas
const letrasMinusculas = "abcdefghijlmnopqrstuvwxyz"; //Variável com todas as letras minúsculas
const numeros = "0123456789"; //Variável com todos os números
const caracteresEspeciais = "!@#$%^&"; //Variável com todos os caracteres especiais

//Função responsável por pegar da variável "letrasMaiusculas" todas as letras declaradas nessa
function obterLetrasMaiusculas() {
    return letrasMaiusculas[Math.floor(Math.random() * letrasMaiusculas.length)];
}

//Função responsável por pegar da variável "letrasMinusculas" todas as letras declaradas nessa
function obterLetrasMinusculas() {
    return letrasMinusculas[Math.floor(Math.random() * letrasMinusculas.length)];
}

//Função responsável por pegar da variável "numeros" todas os números declaradas nessa
function obterNumeros() {
    return numeros[Math.floor(Math.random() * numeros.length)];
}

//Função responsável por pegar da variável "caracteresEspeciais" todas os caracteres especiais declaradas nessa
function obterCaracteresEspeciais() {
    return caracteresEspeciais[Math.floor(Math.random() * caracteresEspeciais.length)];
}

//Função responsável por gerar a senha
function geradorDeSenha() {
    const tamanhoDaSenha = inputTamanhoDaSenha.value;

    let senha = "";

    //Validações responsáveis por capturar as escolhas do usuário
    if(checkboxLetraMaiuscula.checked){
        senha += obterLetrasMaiusculas();
    }

    if(checkboxLetraMinuscula.checked){
        senha += obterLetrasMinusculas();
    }

    if(checkboxNumero.checked){
        senha += obterNumeros();
    }

    if(checkboxCaracteresEspeciais.checked){
        senha += obterCaracteresEspeciais();
    }

    //Laço responsável por gerar as senhas de acordo com as quantidades de caracteres
    for (let i = senha.length; i < tamanhoDaSenha; i ++) {
        const caracteres =  gerarCaracteresDaSenha();
        senha += caracteres;
    }

    //Alteração do valor do input para a senha gerada
    inputSenha.value = senha;
}

//Função responsável por gerar os caracteres da senha
function gerarCaracteresDaSenha() {
    const listaDeCaracteres = [];

    //Validações que adicionam na Array os respectivos itens da senha
    if(checkboxLetraMaiuscula.checked) {
        listaDeCaracteres.push(obterLetrasMaiusculas());
    }

    if(checkboxLetraMinuscula.checked) {
        listaDeCaracteres.push(obterLetrasMinusculas());
    }

    if(checkboxNumero.checked) {
        listaDeCaracteres.push(obterNumeros());
    }

    if(checkboxCaracteresEspeciais.checked) {
        listaDeCaracteres.push(obterCaracteresEspeciais());
    }

    //Validação responsável por mostrar ao usuário uma mensagem no Input
    if(listaDeCaracteres.length === 0) {
        return "Selecione abaixo quais caracteres deseja em sua senha";
    }

    //Retorna no input a senha de acordo com as especificações do usuário
    return listaDeCaracteres[Math.floor(Math.random() * listaDeCaracteres.length)];
}

//Laço responsável por atribuir a função "geradorDeSenha" para os dois botões que geram a senha
botaoGerar.forEach( (botao) => {
    botao.addEventListener("click", geradorDeSenha);
});

//Evento responsável por copiar a senha na área de transferência do usuário ao clicar no botão "copiar"
botaoCopiar.addEventListener("click", () => {
    const texto = document.createElement("textarea");
    const aviso = document.querySelector("[data-aviso]");
    const senhaParaSerCopiada = inputSenha.value;

    if(!senhaParaSerCopiada) {
        return;
    }

    texto.value = senhaParaSerCopiada;
    document.body.appendChild(texto);
    texto.select();
    document.execCommand("copy");
    texto.remove();
    aviso.style.display = "block";

    setTimeout(function () {
        aviso.style.display = "none";
    }, 4000);

});

//Função responsável por alterar a imagem de acordo com o tamanho da senha
function animacaoSenha() {
    const imagemTamanhoDaSenha = document.querySelector("[data-imagem-senha]");

    //Validação responsável por mudar as imagens de acordo com o tamanho da senha
    if(inputTamanhoDaSenha.value <= 8) {
        imagemTamanhoDaSenha.style.backgroundImage = "url('/static/assets/img/icone_senha_fraca.svg')";
    } else if(inputTamanhoDaSenha.value <= 12) {
        imagemTamanhoDaSenha.style.backgroundImage = "url('/static/assets/img/icone_senha_regular.svg')";
    } else {
        imagemTamanhoDaSenha.style.backgroundImage = "url('/static/assets/img/icone_senha_forte.svg')";
    }

    //Validação responsável por não permitir valores menores que 4 no input de tamanho da senha
    if(inputTamanhoDaSenha.value < 4) {
        iinputTamanhoDaSenha.value = inputTamanhoDaSenha.attributes.min;
    }
}

//Responsável por aparecer uma senha aleatória sempre que a página é carregada
window.onload = function () {
    checkboxCaracteresEspeciais.checked = true;
    checkboxLetraMaiuscula.checked = true;
    checkboxLetraMinuscula.checked = true;
    checkboxNumero.checked = true;
    inputTamanhoDaSenha.value = 13;
    geradorDeSenha();
    animacaoSenha();
}

//Chamada de função da imagem
animacaoSenha();
