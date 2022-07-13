//Quando o documento HTML for carregado, irá criar a variável com o input e irá adicionar uma função ao input
window.onload = function(){
  const HTMLDoInput = document.querySelector('[data-telefone]'); //Variável que armazena o HTML do input.

  //Enquanto o usuário estiver digitando no input, será adicionado uma função que pega o valor do input e passa como parâmetro para a função 'Substuição dos valores do input'.
	HTMLDoInput.onkeyup = function(){
	    HTMLDoInput.value = substituicaoDosValoresDoInput(HTMLDoInput.value);
    }
}

//Função responsável por realizar a substituição dos valores
function substituicaoDosValoresDoInput(valor){
    valor = valor.replace(/\D/g,""); //Remove tudo o que não é dígito, isto é, letras, caracteres especiais, etc.
    valor = valor.replace(/^(\d{2})(\d)/g,"($1) $2"); //Adiciona os parênteses em volta dos dois primeiros dígitos.
    valor = valor.replace(/(\d)(\d{4})$/,"$1-$2"); //Adiciona hífen entre o quarto e o quinto dígito.
    return valor; //Retorna o valor do input com as alterações das regex aplicadas.
}
