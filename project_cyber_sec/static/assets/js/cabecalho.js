// Funcionamento do botão do menu
$('#cabecalho_menu_checkbox').on('click', function(){
  $('#cabecalho_navegacao_lista').slideToggle('slow').css('display', 'flex');
});

// Abertura do cabeçalho mobile - Sobre nós
$('#cabecalho_navegacao_item_sobre_nos').on('click', function() {
  $('#cabecalho_navegacao_sublista_sobre_nos').slideToggle('slow').css('display', 'block');
  $(this).toggleClass('rodar__item__link--icone');
});

// Abertura do cabeçalho mobile - Ferramentas
$('#cabecalho_navegacao_item_ferramentas').on('click', function() {
  $('#cabecalho_navegacao_sublista_ferramentas').slideToggle('slow').css('display', 'block');
  $(this).toggleClass('rodar__item__link--icone');
});

// Abertura do cabeçalho mobile - Tutoriais
$('#cabecalho_navegacao_item_tutoriais').on('click', function() {
  $('#cabecalho_navegacao_sublista_tutoriais').slideToggle('slow').css('display', 'block');
  $(this).toggleClass('rodar__item__link--icone');
});

// Abertura do cabeçalho mobile - Conceitos
$('#cabecalho_navegacao_item_conceitos').on('click', function() {
  $('#cabecalho_navegacao_sublista_conceitos').slideToggle('slow').css('display', 'block');
  $(this).toggleClass('rodar__item__link--icone');
});
