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

//Variáveis de index para as funções.
let itemAtualComputadores = -1;
let itemAtualCelulares = -1;
let itemAtualRedesSociais = -1;
let itemAtualNavegadores = -1;

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

//Função responsável por realizar a movimentação do carrossel da categoria de computadores
function validacoesComputadores(botao, itemAtualDoCarrossel, itensMaximosDoCarrossel) {
    //Validação responsável por alterar o index do item atual do carrossel.
    if(botao) {
        itemAtualComputadores -= 1;
    } else {
        itemAtualComputadores += 1;
    }

    //Validação responsável por fazer o carrossel retornar ao primeiro item quando o último for alcançado.
    if(itemAtualDoCarrossel >= itensMaximosDoCarrossel) {
        itemAtualComputadores = 0;
    }

    //Validação responsável por fazer o carrossel retornar ao último item quando o primeiro for alcançado.
    if(itemAtualComputadores < 0) {
        itemAtualComputadores = itensMaximosDoCarrossel - 1;
    }
}

//Função responsável por realizar a movimentação do carrossel da categoria de celulares
function validacoesCelulares(botao, itemAtualDoCarrossel, itensMaximosDoCarrossel) {
    //Validação responsável por alterar o index do item atual do carrossel.
    if(botao) {
        itemAtualCelulares -= 1;
    } else {
        itemAtualCelulares += 1;
    }

    //Validação responsável por fazer o carrossel retornar ao primeiro item quando o último for alcançado.
    if(itemAtualDoCarrossel >= itensMaximosDoCarrossel) {
        itemAtualCelulares = 0;
    }

    //Validação responsável por fazer o carrossel retornar ao último item quando o primeiro for alcançado.
    if(itemAtualCelulares < 0) {
        itemAtualCelulares = itensMaximosDoCarrossel - 1;
    }
}

//Função responsável por realizar a movimentação do carrossel da categoria de redes-sociais
function validacoesRedesSociais(botao, itemAtualDoCarrossel, itensMaximosDoCarrossel) {
    //Validação responsável por alterar o index do item atual do carrossel.
    if(botao) {
        itemAtualRedesSociais -= 1;
    } else {
        itemAtualRedesSociais += 1;
    }

    //Validação responsável por fazer o carrossel retornar ao primeiro item quando o último for alcançado.
    if(itemAtualDoCarrossel >= itensMaximosDoCarrossel) {
        itemAtualRedesSociais = 0;
    }

    //Validação responsável por fazer o carrossel retornar ao último item quando o primeiro for alcançado.
    if(itemAtualRedesSociais < 0) {
        itemAtualRedesSociais = itensMaximosDoCarrossel - 1;
    }
}

//Função responsável por realizar a movimentação do carrossel da categoria de navegadores
function validacoesNavegadores(botao, itemAtualDoCarrossel, itensMaximosDoCarrossel) {
    //Validação responsável por alterar o index do item atual do carrossel.
    if(botao) {
        itemAtualNavegadores -= 1;
    } else {
        itemAtualNavegadores += 1;
    }

    //Validação responsável por fazer o carrossel retornar ao primeiro item quando o último for alcançado.
    if(itemAtualDoCarrossel >= itensMaximosDoCarrossel) {
        itemAtualNavegadores = 0;
    }

    //Validação responsável por fazer o carrossel retornar ao último item quando o primeiro for alcançado.
    if(itemAtualNavegadores < 0) {
        itemAtualNavegadores = itensMaximosDoCarrossel - 1;
    }
}

//Laço responsável por adicionar nos botões da categoria 'Computadores' as funções do carrossel.
botoesSecaoComputadores.forEach((botao) => {
    botao.addEventListener('click', (e) => {
        let botaoEsquerdo = e.target.classList.contains("botao-voltar-computadores");

        validacoesComputadores(botaoEsquerdo, itemAtualComputadores, itensMaximosDoCarrosselComputadores);

        alteraClasses(itensDoCarrosselComputadores, itemAtualComputadores);

        caracteristicaScroll(itensDoCarrosselComputadores, itemAtualComputadores);
    });
});

//Laço responsável por adicionar nos botões da categoria 'Celulares' as funções do carrossel.
botoesSecaoCelulares.forEach((botao) => {
    botao.addEventListener('click', (e) => {
        let botaoEsquerdo = e.target.classList.contains("botao-voltar-celulares");

        validacoesCelulares(botaoEsquerdo, itemAtualCelulares, itensMaximosDoCarrosselCelulares);

        alteraClasses(itensDoCarrosselCelulares, itemAtualCelulares);

        caracteristicaScroll(itensDoCarrosselCelulares, itemAtualCelulares);
    });
});

//Laço responsável por adicionar nos botões da categoria 'Redes Sociais' as funções do carrossel.
botoesSecaoRedesSociais.forEach((botao) => {
    botao.addEventListener('click', (e) => {
        let botaoEsquerdo = e.target.classList.contains("botao-voltar-redes-sociais");

        validacoesRedesSociais(botaoEsquerdo, itemAtualRedesSociais, itensMaximosDoCarrosselRedesSociais);

        alteraClasses(itensDoCarrosselRedesSociais, itemAtualRedesSociais);

        caracteristicaScroll(itensDoCarrosselRedesSociais, itemAtualRedesSociais);
    });
});

//Laço responsável por adicionar nos botões da categoria 'Navegadores' as funções do carrossel.
botoesSecaoNavegadores.forEach((botao) => {
    botao.addEventListener('click', (e) => {
        let botaoEsquerdo = e.target.classList.contains("botao-voltar-navegadores");

        validacoesNavegadores(botaoEsquerdo, itemAtualNavegadores, itensMaximosDoCarrosselNavegadores);

        alteraClasses(itensDoCarrosselNavegadores, itemAtualNavegadores);

        caracteristicaScroll(itensDoCarrosselNavegadores, itemAtualNavegadores);
    });
});