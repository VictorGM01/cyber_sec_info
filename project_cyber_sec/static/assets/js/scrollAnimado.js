//Adição da classe ".js" ao arquivo HTML em si. Dessa forma, caso o usuário esteja com o JS desativado, o conteúdo não será animado, mas será apresentado normalmente para ele.
var root = document.documentElement;
root.className += 'js';

//Função responsável por calcular a distância entre os elementos que estarão com a classe "animacao" e o topo da página.
function elementoTopo(idElemento){
    const elementoOffset = $(idElemento).offset().top; //Variável que armazena os valores dos sentidos do elemento, '.offset()', sentidos que são: top, left, etc. Como precisa do topo, utiliza-se o .top().

    return elementoOffset; //Retorna o valor obtido de elementOffset.
}

//Identifica se o documento HTML está carregado. Se ele estiver, irá executar a função responsável pela animação e criação de variáveis necessárias.
$(document).ready(function () {
    const elementoAnimado = $('.animacao'); //Variável que define qual elemento irá receber a classe 'animacao'.
    const classeAnimacao = 'animacao-inicio'; //Variável que armazena o nome da classe que aplica a estilização aos elementos que não serão afetados pelo scroll, ou seja, para aqueles elementos que aparecem primeiro na página.
    const alturaDaPagina = $(window).height(); //Variável que armazena a altura da página.
    const deslocamento = alturaDaPagina - (alturaDaPagina / 4); //Varivável que armazena o deslocamento realizado em cada scroll.

    //Função responsável por realizar o calculo final do scroll e definir se o elemento recebe ou não a classe 'animacao-inicio'.
    function animacaoScroll() {
        const documentoTopo = $(document).scrollTop(); //Variável que armazena a distância total do scroll realizado até o topo da página.

        //Laço responsável por adicionar uma função para cada elemento que possui a classe definida na variável 'elementoAnimado'.
        elementoAnimado.each(function () {
            //Validação responsável por adicionar ou remover a variável que armazena a classe de animação, de acordo com a posição do scroll.
            if(documentoTopo > elementoTopo(this) - deslocamento) {
                $(this).addClass(classeAnimacao);
            } else {
                $(this).removeClass(classeAnimacao);
            }
        });
    }

    //Chamada de função para que ela execute assim que a página for carregada.
    animacaoScroll();

    //Aplicação da função de scroll animado de acordo com o scroll detectado no documento HTML.
    $(document).scroll(function () {
        setTimeout(function () {
            animacaoScroll()
        }, 600);
    });
});
