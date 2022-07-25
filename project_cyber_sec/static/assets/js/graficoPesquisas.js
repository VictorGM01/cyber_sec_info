google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Alternativa', 'Resposta'],
      ["Não conheço nada", 19],
      ["Conheço muito pouco", 29],
      ["Conheço pouco", 23],
      ["Conheço somente o essencial", 26],
      ["Conheço bem", 16],
      ["Domino o assunto", 3],
    ]);

    var options = {
      is3D: true,  // Gráfico 3d
      colors: ["#8B53F4", "#CDF216", "#4E8C45", "#28BC10", "#33F216", "#458C65"],
      backgroundColor: "transparent",
      legend: {position: 'bottom', textStyle: {color: 'white', fontSize: 12}},

      // Descomentar este código se o gráfico tiver explosão
      slices: {1: {offset: 0.2}},
    };

    var chart = new google.visualization.PieChart(document.getElementById('pergunta1'));
    chart.draw(data, options);
}

google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart1);
    function drawChart1() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Questao');
    data.addColumn('number', 'Respostas');
    data.addRows([
      ["Até 12 anos", 3],
      ["Entre 13 e 17 anos", 48],
      ["Entre 18 e 25 anos", 24],
      ["Entre 26 e 40 anos", 24],
      ["Entre 41 e 60 anos", 13],
      ["Acima de 60 anos", 4],
    ]);

    var options = {
      colors: ['#0F290E'],
      bars: 'horizontal',
      backgroundColor: "#4a8450",
      legend: "none",
    };

    var chart = new google.visualization.BarChart(document.getElementById('pergunta2'));
    chart.draw(data, options);
}

google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart2);
    function drawChart2() {
    var data = google.visualization.arrayToDataTable([
      ['Alternativa', 'Resposta'],
      ["Sim", 32],
      ["Não", 17],
      ["Não tenho nenhuma rede social", 2],
    ]);

    var options = {
      is3D: true,  // Gráfico 3d
      colors: ["#8B53F4", "#CDF216", "#4E8C45"],
      backgroundColor: "transparent",
      legend: {position: 'bottom', textStyle: {color: 'white', fontSize: 12}},

      // Descomentar este código se o gráfico tiver explosão
      slices: {0: {offset: 0.2}},
    };

    var chart = new google.visualization.PieChart(document.getElementById('pergunta3'));
    chart.draw(data, options);
}

google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart3);
    function drawChart3() {
    var data = google.visualization.arrayToDataTable([
      ['Alternativa', 'Resposta'],
      ["Sim", 2],
      ["Não", 43],
      ["Não sei", 6],
    ]);

    var options = {
      is3D: true,  // Gráfico 3d
      colors: ["#8B53F4", "#33F216", "#458C65"],
      backgroundColor: "transparent",
      legend: {position: 'bottom', textStyle: {color: 'white', fontSize: 12}},

      // Descomentar este código se o gráfico tiver explosão
      slices: {0: {offset: 0.2}},
    };

    var chart = new google.visualization.PieChart(document.getElementById('pergunta4'));
    chart.draw(data, options);
}

google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart4);
    function drawChart4() {
    var data = google.visualization.arrayToDataTable([
      ['Alternativa', 'Resposta'],
      ["Sim", 7],
      ["Não", 10],
      ["Mais ou menos", 34],
    ]);

    var options = {
      is3D: true,  // Gráfico 3d
      colors: ["#458C65", "#33F216", "#8B53F4"],
      backgroundColor: "transparent",
      legend: {position: 'bottom', textStyle: {color: 'white', fontSize: 12}},

      // Descomentar este código se o gráfico tiver explosão
      slices: {2: {offset: 0.2}},
    };

    var chart = new google.visualization.PieChart(document.getElementById('pergunta5'));
    chart.draw(data, options);
}

google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart5);
    function drawChart5() {
    var data = google.visualization.arrayToDataTable([
      ['Alternativa', 'Resposta'],
      ["Sim", 8],
      ["Não", 11],
      ["Mais ou menos", 30],
      ["Não tenho nenhuma rede social", 2],
    ]);

    var options = {
      is3D: true,  // Gráfico 3d
      colors: ["#8B53F4", "#CDF216", "#4E8C45", "#28BC10",],
      backgroundColor: "transparent",
      legend: {position: 'bottom', textStyle: {color: 'white', fontSize: 12}},

      // Descomentar este código se o gráfico tiver explosão
      slices: {1: {offset: 0.2}},
    };

    var chart = new google.visualization.PieChart(document.getElementById('pergunta6'));
    chart.draw(data, options);
}

google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart6);
    function drawChart6() {
    var data = google.visualization.arrayToDataTable([
      ['Alternativa', 'Resposta'],
      ["Sim", 7],
      ["Não", 34],
      ["Talvez", 8],
      ["Não sei", 2],
    ]);

    var options = {
      is3D: true,  // Gráfico 3d
      colors: ["#4E8C45", "#28BC10", "#8B53F4", "#CDF216",],
      backgroundColor: "transparent",
      legend: {position: 'bottom', textStyle: {color: 'white', fontSize: 12}},

      // Descomentar este código se o gráfico tiver explosão
      slices: {1: {offset: 0.2}},
    };

    var chart = new google.visualization.PieChart(document.getElementById('pergunta7'));
    chart.draw(data, options);
}

google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart7);
    function drawChart7() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Questao');
    data.addColumn('number', 'Respostas');
    data.addRows([
      ["Pouco expostos", 15],
      ["Razoavelmente expostos", 23],
      ["Expostos", 7],
      ["Muito expostos", 3],
      ["Não sei", 2],
      ["Não tenho nenhuma rede social", 1],
    ]);

    var options = {
      colors: ['#0F290E'],
      bars: 'horizontal',
      backgroundColor: "#4a8450",
      legend: "none",
    };

    var chart = new google.visualization.BarChart(document.getElementById('pergunta8'));
    chart.draw(data, options);
}

google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart8);
    function drawChart8() {
    var data = google.visualization.arrayToDataTable([
      ['Alternativa', 'Resposta'],
      ["Não sei", 17],
      ["Sim", 21],
      ["Não", 11],
      ["Não tenho nenhuma rede social", 2],
    ]);

    var options = {
      is3D: true,  // Gráfico 3d
      colors: ["#3366CC", "#28BC10", "#8B53F4", "#4a8450",],
      backgroundColor: "transparent",
      legend: {position: 'bottom', textStyle: {color: 'white', fontSize: 12}},

      // Descomentar este código se o gráfico tiver explosão
      slices: {0: {offset: 0.2}},
    };

    var chart = new google.visualization.PieChart(document.getElementById('pergunta9'));
    chart.draw(data, options);
}

google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart9);
    function drawChart9() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Questao');
    data.addColumn('number', 'Respostas');
    data.addRows([
      ["Abro o link assim que leio", 5],
      ["Verifico o remetente antes de abrir o link", 3],
      ["Verifico o remetente e o conteúdo do e-mail antes de abrir o link", 21],
      ["Movo o e-mail para a caixa de spam (após a leitura), uma vez que não solicitei nenhum envio de links", 5],
      ["Movo o e-mail para caixa de spam (antes da leitura) por medo", 2],
      ["Não leio meus e-mails", 13],
      ["Não tenho e-mail", 2],
    ]);

    var options = {
      colors: ['#0F290E'],
      bars: 'vertical',
      backgroundColor: "#4a8450",
      legend: "none",
    };

    var chart = new google.visualization.ColumnChart(document.getElementById('pergunta10'));
    chart.draw(data, options);
}

google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart10);
    function drawChart10() {
    var data = google.visualization.arrayToDataTable([
      ['Alternativa', 'Resposta'],
      ["Sim", 15],
      ["Não", 48],
      ["Não lembro", 2],
    ]);

    var options = {
      is3D: true,  // Gráfico 3d
      colors: ["#8B53F4", "#33F216", "#458C65"],
      backgroundColor: "transparent",
      legend: {position: 'bottom', textStyle: {color: 'white', fontSize: 12}},

      // Descomentar este código se o gráfico tiver explosão
      slices: {0: {offset: 0.2}},
    };

    var chart = new google.visualization.PieChart(document.getElementById('pergunta11'));
    chart.draw(data, options);
}

google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart11);
    function drawChart11() {
    var data = google.visualization.arrayToDataTable([
      ['Alternativa', 'Resposta'],
      ["Sim", 46],
      ["Não", 19],
    ]);

    var options = {
      is3D: true,  // Gráfico 3d
      colors: ["#8B53F4", "#3366CC"],
      backgroundColor: "transparent",
      legend: {position: 'bottom', textStyle: {color: 'white', fontSize: 12}},

      // Descomentar este código se o gráfico tiver explosão
      slices: {0: {offset: 0.2}},
    };

    var chart = new google.visualization.PieChart(document.getElementById('pergunta12'));
    chart.draw(data, options);
}

google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart12);
    function drawChart12() {
    var data = google.visualization.arrayToDataTable([
      ['Alternativa', 'Resposta'],
      ["Sim", 30],
      ["Não", 27],
      ["Talvez", 7],
      ["Não tenho redes sociais", 1],
    ]);

    var options = {
      is3D: true,  // Gráfico 3d
      colors: ["#8B53F4", "#3366CC", "#458C65", "#33F216"],
      backgroundColor: "transparent",
      legend: {position: 'bottom', textStyle: {color: 'white', fontSize: 12}},

      // Descomentar este código se o gráfico tiver explosão
      slices: {0: {offset: 0.2}},
    };

    var chart = new google.visualization.PieChart(document.getElementById('pergunta13'));
    chart.draw(data, options);
}

google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart13);
    function drawChart13() {
    var data = google.visualization.arrayToDataTable([
      ['Alternativa', 'Resposta'],
      ["Não sei", 20],
      ["Sim", 34],
      ["Não", 10],
      ["Não tenho redes sociais", 1],
    ]);

    var options = {
      is3D: true,  // Gráfico 3d
      colors: ["#33F216", "#458C65", "#3366CC", "#8B53F4"],
      backgroundColor: "transparent",
      legend: {position: 'bottom', textStyle: {color: 'white', fontSize: 12}},

      // Descomentar este código se o gráfico tiver explosão
      slices: {0: {offset: 0.2}},
    };

    var chart = new google.visualization.PieChart(document.getElementById('pergunta14'));
    chart.draw(data, options);
}

google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart14);
    function drawChart14() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Questao');
    data.addColumn('number', 'Respostas');
    data.addRows([
      ["Sim", 16],
      ["Não", 21],
      ["Talvez", 22],
      ["Não sei dizer", 6],
    ]);

    var options = {
      colors: ['#0F290E'],
      bars: 'vertical',
      backgroundColor: "#4a8450",
      legend: "none",
    };

    var chart = new google.visualization.ColumnChart(document.getElementById('pergunta15'));
    chart.draw(data, options);
}