//Variáveis pertencentes à seção da categoria 'Computadores'
const botoesSecaoComputadores = document.querySelectorAll("[data-botao-computadores]"); //HTML dos botões.
const itensDoCarrosselComputadores = document.querySelectorAll("[data-carrossel-item='computadores']"); //Itens da lista de cards.
const itensMaximosDoCarrosselComputadores = itensDoCarrosselComputadores.length; //Tamanho máximo da lista de cards.

//Variáveis pertencentes à seção da categoria 'Celulares'.
const botoesSecaoCelulares = document.querySelectorAll("[data-botao-celulares]");
const itensDoCarrosselCelulares = document.querySelectorAll("[data-carrossel-item='celulares']");
const itensMaximosDoCarrosselCelulares = itensDoCarrosselCelulares.length;


//Variáveis pertencentes à seção da categoria 'Redes Sociais'.
const botoesSecaoRedesSociais = document.querySelectorAll("[data-botao-redes-sociais]");
const itensDoCarrosselRedesSociais = document.querySelectorAll("[data-carrossel-item='redes-sociais']");
const itensMaximosDoCarrosselRedesSociais = itensDoCarrosselRedesSociais.length;


//Variáveis pertencentes à seção da categoria 'Navegadores'.
const botoesSecaoNavegadores = document.querySelectorAll("[data-botao-navegadores]");
const itensDoCarrosselNavegadores = document.querySelectorAll("[data-carrossel-item='navegadores']");
const itensMaximosDoCarrosselNavegadores = itensDoCarrosselNavegadores.length;

//Variável de index para todas as funções.
let itemAtual = -1;

//Função responsável por realizar a movimentação do carrossel.
function validacoes(botao, itemAtualDoCarrossel, itensMaximosDoCarrossel) {
    //Validação responsável por alterar o index do item atual do carrossel.
    if(botao) {
        itemAtual -= 1;
    } else {
        itemAtual += 1;
    }

    //Validação responsável por fazer o carrossel retornar ao primeiro item quando o último for alcançado.
    if(itemAtualDoCarrossel >= itensMaximosDoCarrossel) {
        itemAtual = 0;
    }

    //Validação responsável por fazer o carrossel retornar ao último item quando o primeiro for alcançado.
    if(itemAtual < 0) {
        itemAtual = itensMaximosDoCarrossel - 1;
    }
}

//Função responsável por alterar as classes dos itens para o carrossel.
function alteraClasses(itensDoCarrossel, itemAtualDoCarrossel) {
    //Laço responsável por remover a classe quando o item não tiver foco.
    itensDoCarrossel.forEach((item) => {
        item.classList.remove("item-atual-carrossel");
    });

    //Adiciona a classe de acordo com o index do item do carrossel.
    itensDoCarrossel[itemAtualDoCarrossel].classList.add("item-atual-carrossel");
}

//Função responsável por alterar a característica do scroll do carrossel.
function caracteristicaScroll(itensDoCarrossel, itemAtualDoCarrossel) {
    itensDoCarrossel[itemAtualDoCarrossel].scrollIntoView({
        inline: "center",
        behavior: "smooth",
        block: "nearest"
    });
}

//Laço responsável por adicionar nos botões da categoria 'Computadores' as funções do carrossel.
botoesSecaoComputadores.forEach((botao) => {
    botao.addEventListener('click', (e) => {
        let botaoEsquerdo = e.target.classList.contains("botao-voltar-computadores");

        validacoes(botaoEsquerdo, itemAtual, itensMaximosDoCarrosselComputadores);

        alteraClasses(itensDoCarrosselComputadores, itemAtual);

        caracteristicaScroll(itensDoCarrosselComputadores, itemAtual);
    });
});

//Laço responsável por adicionar nos botões da categoria 'Celulares' as funções do carrossel.
botoesSecaoCelulares.forEach((botao) => {
    botao.addEventListener('click', (e) => {
        let botaoEsquerdo = e.target.classList.contains("botao-voltar-celulares");

        validacoes(botaoEsquerdo, itemAtual, itensMaximosDoCarrosselCelulares);

        alteraClasses(itensDoCarrosselCelulares, itemAtual);

        caracteristicaScroll(itensDoCarrosselCelulares, itemAtual);
    });
});

//Laço responsável por adicionar nos botões da categoria 'Redes Sociais' as funções do carrossel.
botoesSecaoRedesSociais.forEach((botao) => {
    botao.addEventListener('click', (e) => {
        let botaoEsquerdo = e.target.classList.contains("botao-voltar-redes-sociais");

        validacoes(botaoEsquerdo, itemAtual, itensMaximosDoCarrosselRedesSociais);

        alteraClasses(itensDoCarrosselRedesSociais, itemAtual);

        caracteristicaScroll(itensDoCarrosselRedesSociais, itemAtual);
    });
});

//Laço responsável por adicionar nos botões da categoria 'Navegadores' as funções do carrossel.
botoesSecaoNavegadores.forEach((botao) => {
    botao.addEventListener('click', (e) => {
        let botaoEsquerdo = e.target.classList.contains("botao-voltar-navegadores");

        validacoes(botaoEsquerdo, itemAtual, itensMaximosDoCarrosselNavegadores);

        alteraClasses(itensDoCarrosselNavegadores, itemAtual);

        caracteristicaScroll(itensDoCarrosselNavegadores, itemAtual);
    });
});