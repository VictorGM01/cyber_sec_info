function pesquisar() {
    const input = document.getElementById('inputPesquisaConteudo'); //HTML do input de pesquisa.
    const filtro = input.value.toUpperCase(); //Valor que o input de pesquisa recebe, o qual tem as suas letras transformadas em maiúscula.
    const listaBusca = document.getElementById('listaBusca'); //HTML da lista do dicionário: tag <ul>.
    const itensBusca = listaBusca.getElementsByTagName('li'); //HTML dos itens da lista do dicionário: tag <li>.
    const referencias = document.getElementById('artigoReferencias'); //HTML da lista de referências.
    const itemLetra = document.getElementsByClassName('secao-conteudo__artigo-letra'); //HTML do indicativo de letra do dicionário.
    const nenhumResultado = document.getElementById('nenhumResultado'); //HTML do aviso de que nenhum item foi encontrado.
    let naoEncontrados = []; //Array de pesquisas não encontradas.

    //Laço responsável por iterar por cada item da lista do dicionário enquanto o usuário digitar no input.
    for(let i = 0; i < itensBusca.length; i++) {
        const artigos = itensBusca[i].getElementsByTagName('article')[0]; //HTML de cada conteúdo que está dentro dos itens da lista do dicionário e que estão em uma tag de artigo: <article>.
        if(artigos.innerHTML.toUpperCase().indexOf(filtro) > -1){
            //Caso o que o usuário digitou no input seja um dos itens da lista do dicionário, esse item será demonstrado para ele. Além disso, o HTML de referências só será demonstrando quando o que foi digitado no input, pelo usuário, for apagado. Já o HTML de aviso não será demonstrado para o usuário.
            itensBusca[i].style.display = "";
            referencias.style.display = "";
            nenhumResultado.style.display = "none";
        } else {
            //Caso o que o usuário digitou no input não seja correspondente a um dos itens da lista do dicionário, esse item não será demonstrado. Além disso, o HTML de referência também não será demonstrado.
            itensBusca[i].style.display = "none";
            referencias.style.display = "none";
            naoEncontrados.push(1); //Cada item não correspondente será adicionado na array "naoEncontrados", fazendo com que esse item não seja demonstrado para o usuário.
        }
    }

    //Validação para que os itens não encontrados na lista do dicionário não apareça e que seja demonstrado o aviso de que nenhum item foi encontrado. Além disso, há uma validação para que o indicativo de letra do dicionário também não seja demonstrado quando o usuário digitar esse indicativo no input.
    if(naoEncontrados.length === itensBusca.length || itensBusca.length === (naoEncontrados.length + itemLetra.length)){
        nenhumResultado.style.display = "flex";
    }

    //Laço responsável por iterar em cada item da lista que possui o indicativo de letra do dicionário, enquanto o usuário estiver digitando.
    for(let n = 0; n < itemLetra.length; n++) {
        if (filtro.length === 0) {
            //Caso o valor do input de pesquisa seja nulo, ou seja, se o input estiver vazio, o indicativo de letra do dicionário será demonstrado novamente para o usuário. Além de que o aviso de que nenhum item foi encontrado não será demonstrado para o usuário.
            itemLetra[n].style.display = "";
            nenhumResultado.style.display = "none";
        } else {
            //Caso o valor do input de pesquisa seja diferente de nulo, ou seja, esteja sendo preenchido, o indicativo de letra do dicionário não será demonstrado para o usuário.
            itemLetra[n].style.display = "none";
        }
    }
}