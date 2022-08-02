//Assim que a página for carregada, irá executar executar a função abaixo.
window.onload = function () {
    const listaCarrossel = document.querySelector('[data-lista-carrossel]'); //Variável que armazena a lista que contém os itens do carrossel: tag <ul>.
    const itensCarrossel = document.querySelectorAll('[data-lista-carrossel] [data-artigo-recente]'); //Variável que armazena os itens do carrossel: tag <li>.
    let contadorCarrossel = 0; //Variável responsável por realizar a contagem do carrossel.

    //Validação responsável por identificar a largura da tela do usuário, para executar ou não a função de carrossel.
    if(screen.width < 1024) {

        //Laço responsável por retirar, de cada item do carrossel, a classe "animação", que é responsável por dar o efeito do scroll animado.
        itensCarrossel.forEach((itens) => {
            itens.classList.remove('animacao');
        })

        //Função responsável pelo funcionamento do carrossel.
        function carrossel() {

            //Cada vez que a função é executada, é somado 1 ao contador do carrossel.
            contadorCarrossel++;

            //Validação responsável por retornar ao primeiro item do carrossel quando estiver no último item.
            if(contadorCarrossel > itensCarrossel.length - 1) {
                contadorCarrossel = 0;
            }

            //Responsável por alterar o movimento da lista do carrossel.
            listaCarrossel.style.transform = `translateX(${-contadorCarrossel * 18}rem)`
        }

        //Função responsável por executar a função de carrossel de acordo com o intervalo determinado.
        setInterval(carrossel, 2000);
    }
}
