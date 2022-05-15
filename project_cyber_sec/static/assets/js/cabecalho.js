// Funcionamento do botão do menu
$('#cabecalho_menu_checkbox').on('click', function(){
  $('#cabecalho_navegacao_lista').slideToggle('slow').css('display', 'flex');
});

// Abertura do cabeçalho mobile - Sobre nós
$('#cabecalho_navegacao_item_sobre_nos').on('click', function() {
  $('#cabecalho_navegacao_sublista_sobre_nos').slideToggle('slow').css('display', 'block');
});

