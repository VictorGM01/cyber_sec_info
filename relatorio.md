# Cyber Security Information - PJI 2022 - IFSP
![image](https://user-images.githubusercontent.com/86068797/166588543-9ff49eb2-8926-4de9-8c27-27d4936941e7.png)

> ## Tabela de Conteúdos
* [Tema e Autores](#tema-e-autores)
* [Introdução](#introdução)
  * [Objetivos](#objetivos)
    * [Objetivo Geral](#objetivo-geral)
    * [Objetivos Específicos](#objetivos-específicos)
  * [Justificativa](#justificativa)
* [Revisão de Literatura](#revisão-de-literatura)
  * [Acessibilidade](#acessibilidade)
    * [Acessibilidade Web](#acessibilidade-web)
    * [Acessibilidade Web em Dispositivos Móveis](#acessibilidade-web-em-dispositivos-móveis)
    * [Acessibilidade Web e a Inclusão Informacional](#acessibilidade-web-e-a-inclusão-informacional)
  * [Segurança Cibernética](#segurança-cibernética)
    * [Crimes Cibernéticos](#crimes-cibernéticos)
    * [Públicos Vulneráveis na Web](#públicos-vulneráveis-na-web)
      * [Crianças e Adolescentes](#crianças-e-adolescentes)
      * [Idosos](#idosos)
  * [Tecnologias]()
    * [Front-End]()
      * [HTML, CSS e JavaScript]()
      * [S.E.O.]()
    * [Back-End]()
      * [Python e Django]()
      * [SQLite e PostgreSQL]()
  * [Artigos Relacionados]()

## Tema e Autores

O presente trabalho tem como tema:
> **Desenvolvimento de uma aplicação web para divulgação de conteúdos e ferramentas acerca da cibersegurança**
 
Os autores desse projeto são:

<table>
    <tr>
      <td align="center">
        <img src="https://user-images.githubusercontent.com/86068797/178555475-152784e4-593f-4767-9eeb-9960d1892b5c.png" width="150;" alt="Foto de Anna Beatriz"/>
        <br>
        <b>Anna Beatriz Santos e Souza</b>
        <br>
        Responsável pelo desenvolvimento back-end da aplicação web, pela revisão e padronização de scripts e pela criação de ferramentas da aplicação.
        <br>
        <br>
        <a href="https://www.linkedin.com/in/anna-beatriz-3b32921aa/">
          <img alt="Perfil do Linkedin de Anna Beatriz" src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white">
        </a>
      </td>
      <td align="center">
        <img src="https://user-images.githubusercontent.com/86068797/178555740-9b99df1a-e39b-46b2-8474-71903d1483f7.png" width="150;" alt="Foto de Hillary Mendes"/>
        <br>
        <b>Hillary Mendes Moreira</b>
        <br>
        Responsável pelo desenvolvimento front-end da aplicação web, pela criação da interface do usuário (UI) e pela criação de templates complementares.
        <br>
        <br>
        <a href="https://www.linkedin.com/in/hillary-mendes-78609a215/">
          <img alt="Perfil do Linkedin de Hillary Mendes" src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white">
        </a>
      </td>
    </tr>
    <tr>
      <td align="center">
        <img src="https://user-images.githubusercontent.com/86068797/178555567-f0f70de3-183e-4f56-8d6e-341480c2df72.png" width="150;" alt="Foto de Raphaela Ferraz"/>
        <br>
        <b>Raphaela Guiland Ferraz</b>
        <br>
        Secretária do projeto
        <br>
        Responsável pelo desenvolvimento front-end da aplicação web, pelos testes de usabilidade e acessibilidade da aplicação, pela criação da interface do usuário (UI) e pela experiência do usuário (UX).
        <br>
        <br>
        <a href="https://www.linkedin.com/in/raphaela-guiland-ferraz-32a980214/">
          <img alt="Perfil do Linkedin de Raphaela Ferraz" src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white">
        </a>
      </td>
      <td align="center">
        <img src="https://user-images.githubusercontent.com/86068797/178555874-d9567e1a-70be-496c-9579-a6d179df3de7.png" width="150;" alt="Foto de Victor Gabriel Marques"/>
        <br>
        <b>Victor Gabriel Marques</b>
        <br>
        Líder do Projeto
        <br>
        Responsável pelo desenvolvimento back-end da aplicação web, pela criação do ambiente de produção, pelo desenvolvimento de scripts complementares e pela criação de ferramentas da aplicação.
        <br>
        <br>
        <br>
        <a href="https://www.linkedin.com/in/victor-marques-profile/">
          <img alt="Perfil do Linkedin de Victor Marques" src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white">
        </a>
      </td>
    </tr>
</table>

Os orientadores desse projeto são:

<table>
    <tr>
      <td align="center">
        <img src="https://user-images.githubusercontent.com/86068797/178559771-8f9f90e3-e9be-4be3-b435-e2bbed0df593.png" width="150;" alt="Foto de Adriano Ferruzzi"/>
        <br>
        <b>Adriano José Ferruzzi</b>
        <br>
        Orientador do projeto e professor da área técnica no Instituto Federal de Educação, Ciência e Tecnologia.
        <br>
        <br>
        <a href="https://www.linkedin.com/in/adriano-ferruzzi/">
          <img alt="Perfil do Linkedin de Adriano Ferruzzi" src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white">
        </a>
      </td>
      <td align="center">
        <img src="https://user-images.githubusercontent.com/86068797/178559833-eee470b2-d25e-4c14-82c6-255e2fd310f7.png" width="150;" alt="Foto de Regivaldo Ferreira"/>
        <br>
        <b>Regivaldo Sousa Ferreira</b>
        <br>
        Co-orientador do projeto e professor da área técnica no Instituto Federal de Educação, Ciência e Tecnologia.
        <br>
        <br>
        <a href="https://www.linkedin.com/in/regivaldo-sousa-723680157/">
          <img alt="Perfil do Linkedin de Regivaldo Ferreira" src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white">
        </a>
      </td>
    </tr>
</table>

## Introdução

Em 1946, conforme relatado por Maciel (2015), o primeiro computador digital eletrônico de grande escala era apresentado, o ENIAC (Electronic Numerical Integrator and Computer). Esse computador tinha o peso igual a 30 toneladas e ocupava 180 metros quadrados (MACIEL, 2015). Com o passar do tempo, os computadores foram se desenvolvendo, tornando-se multifuncionais e disponíveis para uso pessoal. Cury e Capobianco (2011) relatam que foi a partir de 1980 que a fase dos computadores portáteis e em rede se iniciou.

Por consequência, é exatamente na década de 1980 que estão datados os primeiros ataques cibernéticos dos quais temos conhecimento. Charão (2017), expõe que, em 1982, Richard Skrenta, com apenas quinze anos de idade, desenvolveu o Elk Cloner, um vírus que tinha como objetivo contaminar computadores e que se difundia a partir de cópias de disquetes que já estavam infectados. Outrossim, Ribeiro e Albuquerque (2014) relatam que, ainda nos anos 80, o primeiro worm conhecido foi criado pelo estudante Robert T. Morris, chamado de Morris Worm. Esse worm infectou, segundo Serge Malenkovich (2013), “[...] cerca de 10% dos computadores conectados à internet na época”, sendo semelhante ao que hoje conhecemos como um tipo de DoS (ataque de negação de serviço), uma vez que o worm se replicava inúmeras vezes num mesmo computador, deixando o sistema inoperante.

Com o passar do tempo, na medida que os aparelhos eletrônicos foram se desenvolvendo, os crimes cibernéticos tornaram-se cada vez mais amplos e complexos. A título de exemplificação, a empresa holandesa de cibersegurança Surfshark estimou que, no ano de 2021, 1 em cada 5 pessoas em todo o mundo teve seus dados vazados, conforme publicado pela revista IstoÉ (2021). Além disso, em fevereiro de 2022, segundo um levantamento da Serasa Experian (2021), 326.290 brasileiros foram alvos de tentativas de golpes - o que equivale a dizer que a cada 8 segundos um brasileiro foi vítima de golpistas.

Com a crescente onda dos crimes cibernéticos, criou-se um ramo de estudos, dentro da segurança da informação, relacionado a esses ataques. Esse ramo de estudos é a Cibersegurança ou, em inglês “Cybersecurtiy” ou “Cyber security”, que, de acordo com a  Oxford University Press (2014), consiste no estado de proteção contra o uso criminoso ou não autorizado de dados eletrônicos, ou as medidas tomadas para isso (Apud Craigen et al, 2014).

Dessa maneira, é de extrema importância que a comunidade como um todo saiba a importância da cibersegurança e como ela pode impactar, positiva ou negativamente, a vida de inúmeras pessoas. Todavia, nota-se uma ausência da democratização do acesso à informações relacionadas a esse tema, o que resulta em um grande número de pessoas desinformadas, principalmente crianças e idosos. Citando um caso análogo, o pesquisador de segurança sênior da Kaspersky,  Fabio Assolini (2020), apontou, em uma notícia da empresa, que os idosos são, para os criminosos digitais, um grupo vulnerável e altamente lucrativo.

Nessa direção, o projeto propõe a criação de uma aplicação web que divulgará artigos, tutoriais e ferramentas que auxiliarão os usuários na garantia da segurança dos seus dados é imprescindível, uma vez que todas as pessoas, independente da idade, escolaridade ou conhecimento sobre a Segurança da Informação e Tecnologia da Informação, terão acesso a materiais de altíssima qualidade, criados de modo a garantir a democratização do acesso a conteúdos relacionados ao tema [cibersegurança].

Ademais, entre as ferramentas que serão expostas na aplicação, o projeto propõe que, com o objetivo de fortalecer a segurança dos usuários, seja disponibilizado um aplicativo mobile, para o sistema operacional Android, que seja capaz de armazenar, de maneira segura e confidencial, dados sigilosos dos usuários.

Dessa maneira, a aplicação web é composta pelas seguintes tecnologias: linguagem de marcação HTML5, linguagem de estilização CSS3 e as linguagens de programação JavaScript e Python (com o auxílio do framework Django). Em paralelo, o aplicativo mobile é composto pela tecnologia de programação em blocos, com o auxílio da plataforma Kodular, além do banco de dados em tempo real disponibilizado pelo Google Firebase.

Outrossim, o projeto está desenvolvido com preceitos na literatura como artigos relacionados à Segurança da Informação, Segurança Cibernética, Tecnologia da Informação e Acessibilidade na Web, além de livros e revistas também relacionados ao tema.

### Objetivos
#### Objetivo Geral

* Desenvolver uma aplicação web para difundir materiais sobre a cibersegurança, incluindo ferramentas para a aplicação dos conteúdos apresentados – tal como um software mobile para o armazenamento de informações confidenciais –, tendo em vista a democratização do acesso aos conteúdos que tratam sobre o tema.

#### Objetivos Específicos

* Realizar uma pesquisa via Google Forms para compreender a aplicação da cibersegurança no cotidiano da comunidade, com foco em crianças, adolescentes e idosos; 
* Realizar o levantamento de requisitos da aplicação web;
* Produzir tutoriais, incluindo vídeos, imagens e textos, que tratem da aplicação da segurança cibernética nas redes sociais, aplicativos e aparelhos eletrônicos;
* Produzir artigos relacionados a cibersegurança, com uma linguagem acessível, de modo a garantir que todos possam compreender os assuntos abordados;
* Desenvolver ferramentas, que serão disponibilizadas na aplicação web, para que os usuários possam se precaver no mundo digital, aplicando os conteúdos expostos na aplicação;
* Disponibilizar, entre as ferramentas, um software mobile que servirá como gerenciador de informações confidenciais dos usuários;
* Estudar sobre acessibilidade na web, visando um desenvolvimento semântico da aplicação, de modo que pessoas com deficiências possam acessar, compreender, navegar e interagir na aplicação;
* Aperfeiçoar os conhecimentos relacionados à linguagem de marcação HTML5, à linguagem de estilização CSS3 e às linguagens de programação JavaScript e Python, de modo a desenvolver a aplicação seguindo boas práticas de programação;
* Criar páginas nas principais redes sociais para um maior alcance de usuários da aplicação. 

### Justificativa

A realização do presente trabalho é de suma relevância, principalmente para as pessoas que não possuem um conhecimento prévio sobre Tecnologia da Informação e Segurança da Informação, sobretudo crianças, adolescentes e idosos,  uma vez que trata do desenvolvimento de uma aplicação web para divulgação de conteúdos essenciais sobre a Segurança Cibernética, além de tutoriais e ferramentas. Sendo assim, esta pesquisa será essencial para a disseminação e enfatização da importância do conhecimento acerca da cibersegurança, além de contribuir com a democratização do acesso aos conteúdos relacionados a essa área, pois a aplicação será acessível a todos os públicos. 

Dessa forma, a abordagem que esse trabalho realiza sobre a cibersegurança é algo de extrema importância para o contexto atual, dado que a tecnologia está cada vez mais inserida na sociedade. Assim sendo, com o avanço da tecnologia, há também o avanço de crimes cibernéticos e isso é evidenciado pelo surgimento do “WannaCry”, em 2017, que, de acordo com Patil e Mohurle (2017), é um software malicioso responsável pela criptografia de arquivos ou dispositivos inteiros. A restituição desses dados só ocorre após a vítima realizar um pagamento ao sequestrador. Nessa direção, além do surgimento do “WannaCry”, muitos outros crimes cibernéticos desse tipo foram registrados e o mais recente deles foi o sequestro dos dados do Ministério de Saúde, em dezembro de 2021, pelo grupo de crackers “Lapsus$”. Diante o exposto, é necessário que as pessoas tenham conhecimento sobre o que é a cibersegurança e quais são as maneiras de aplicar esse conceito no dia-a-dia, de modo a evitar mais vítimas de crimes virtuais.

Com isso, este trabalho apresenta uma plataforma inovadora na área de Segurança Cibernética, pois, além dos conteúdos teóricos, tutoriais e ferramentas reunidos em um único lugar, a aplicação web desenvolvida visa a possibilidade de acesso para todas as pessoas, inclusive para as pessoas com deficiências, o que, em concordância com Loja et al. (2015), visa minimizar as limitações das pessoas deficientes, além de contribuir para a inclusão dessas pessoas na sociedade (apud Silva et al., 2018). Para isso, esse projeto utilizará outras tecnologias que facilitam a utilização, navegação e entendimento da aplicação, como, por exemplo, a ferramenta VLibras, responsável por traduzir o conteúdo digital (texto, áudio e imagem) em libras (Brasil, 2019). Ademais, o desenvolvimento da aplicação web conta com a utilização de recursos do HTML5 que possibilitam a navegação por teclado, algo fundamental para os usuários que utilizam softwares de leitura de tela e para usuários que não conseguem utilizar o mouse devido alguma deficiência.


## Revisão de Literatura

### Acessibilidade
#### Acessibilidade Web

O avanço da tecnologia proporciona às pessoas o acesso à uma gama de websites e, dessa forma, é imprescindível que esses sites não tenham barreiras de acesso para as pessoas que possuem deficiência ou para aquelas que não possuem deficiência. Assim, é de extrema importância a garantia da acessibilidade em websites e, conforme a Cartilha de Acessibilidade na Web do W3C Brasil - Fascículo I (2014), a acessibilidade Web trata-se da possibilidade e a condição de percepção, alcance e entendimento, para uma utilização, com igualdade de oportunidades, de segurança e de autonomia,  de sites e ferramentas que estão disponíveis na Web. Isso é reforçado, também, por Cusin e Vidotti (2009), que dizem que a acessibilidade Web é a capacidade e a garantia que as pessoas com deficiência têm de entender, interagir e navegar na Web, podendo contribuir com o mundo virtual. 

Ademais, segundo a W3C WAI (2005), a acessibilidade Web proporciona uma variedade de benefícios para pessoas que não são portadoras de deficiência, sendo essas as pessoas idosas, que estão com suas habilidades em mudança devido ao envelhecimento, e as pessoas com “deficiências temporárias”, como àquelas que estão com um braço quebrado ou com os óculos perdidos. Ainda segundo a W3C WAI, a acessibilidade Web é benéfica, também, para pessoas que se encontram em situações diversas do cotidiano, como: pessoas que estão sob intensa luz solar e que precisam de um site que possua um bom contraste e tamanho de fontes; pessoas que estão em um ambiente que não se pode ouvir um áudio e que precisam de um recurso textual do conteúdo do site; ou pessoas que possuem uma conexão lenta com a Internet, a qual necessita de um site otimizado e bem estruturado para se ter um melhor rendimento.

Além dessas propriedades, a acessibilidade Web possibilita a natureza colaborativa que a Web possui, uma vez que todas as pessoas, independente de suas condições intelectuais, físicas e educacionais, podem ter acesso aos conteúdos que são oferecidos na Web e podem, também, fornecer conteúdos de própria autoria. Cusin e Vidotti (2009), afirmam que a acessibilidade Web é um fator que propulsiona as inclusões informacional e digital, dado que há a presença de uma igualdade de acesso aos usuários, sejam esses portadores de deficiência ou não.

Outrossim, a acessibilidade em websites permite que pessoas deficientes possam realizar atividades simples do cotidiano, como consumir conteúdos informacionais que são disponibilizados na internet. De acordo com a Cartilha de Acessibilidade na Web do W3C Brasil - Fascículo II (2016),  um site que não possui recursos de acessibilidade, faz com que pessoas com deficiência ou com mobilidade reduzida não consigam realizar uma pesquisa acadêmica, por exemplo, dado que as informações que estão presentes em um website sem acessibilidade não poderiam ser consumidas ou interpretadas por esses indivíduos, uma vez que podem utilizar as tecnologias assistivas, leitores de telas, ou podem realizar a navegação por teclado. 

Há ferramentas que auxiliam a garantia da acessibilidade de sites para os usuários, de acordo com as suas necessidades. Em conformidade com a Cartilha de Acessibilidade na Web do W3C Brasil - Fascículo II (2016), há pessoas que são surdas ou que possuem uma deficiência auditiva e acessam as informações em áudio e vídeo com legendas, descrições e tradução em LIBRAS, dessa forma, é possível implementar um tradutor, através de plugins ou softwares, de conteúdos digitais em Português para Libras. Ainda de acordo com a Cartilha, há pessoas que acessam websites por dispositivos móveis, que possuem telas e teclados de tamanho reduzido, além de uma capacidade de processamento e armazenamento menor, dessa maneira, é possível implementar códigos de estilização - CSS - que garantam a responsividade do site. A Cartilha também expõe que há pessoas que possuem deficiência motora e mobilidade reduzida e, para navegar na Web, utilizam o teclado e, com isso, é necessária a implementação de um código de marcação do site - o HTML - semântico.	

#### Acessibilidade Web em Dispositivos Móveis

A acessibilidade Web, quando garantida, pode alcançar outros tipos de benefícios para os diversos usuários existentes na Web e, um desses benefícios é a acessibilidade Web em dispositivos móveis. Para Oliveira e Silva Neto (2019), a acessibilidade Web mobile é entendida como a inclusão de usuários ao acesso de conteúdos, disponibilizados na Web, através da utilização de dispositivos móveis, como smartphones, tablets e outros.

De acordo com a pesquisa TIC de Domicílios (2020), os dispositivos móveis são os principais tipos de dispositivos utilizados para acessar a Web, representando quase o total da população usuária de Internet com dez anos ou mais (99%). Com isso, é primordial a utilização de metodologias do desenvolvimento Web que garantam o acesso desses usuários que utilizam telefones celulares, sendo assim, essa acessibilidade mobile pode ser alcançada através da aplicação de atributos do HTML5 e de funções de estilização do CSS3.

#### Acessibilidade Web e a Inclusão Informacional

Como dito, a acessibilidade Web garante inúmeros benefícios para a comunidade digital e, também, para a educação da comunidade como um todo. A acessibilidade Web, então, garante a inclusão informacional, que, para Cusin e Vidotti (2009) é a habilidade de buscar, usar, acessar e recriar uma informação com  responsabilidade social. 

Ademais, para que se garanta a inclusão informacional, os conteúdos de cunho informativo devem se adequar a todos os usuários e isso é alcançado, também, pela acessibilidade Web. Através de um site acessível, as informações contidas neste, podem ser acessadas pelos usuários de forma igual, uma vez que um site semântico tem uma eficiência alta com leitores de tela e, de acordo com Silva, Lôbo e Mello (2021), os softwares para leitura de textos e comunicações alternativas, fazem com que as pessoas com deficiência consigam ter acesso ao conteúdo que está sendo oferecido pela Web, seja no ambiente de ensino básico, seja no ambiente de ensino superior. 

Diante o exposto, a acessibilidade Web se encontra atrelada à inclusão informacional, algo de extrema importância para a educação dos cidadãos, sobretudo no que diz respeito aos direitos que as pessoas possuem dentro do mundo cibernético. Para Ishiyama e Tanaka (2017), o avanço da Web permite que as pessoas acessem diversos conteúdos na internet, os quais são produzidos de forma livre. Com isso, websites que fornecem conteúdos informacionais e possuem uma acessibilidade garantida, faz com que a educação da sociedade como um todo seja atingida de forma igual e inclusiva, isto é, garantem a inclusão informacional.

### Segurança Cibernética

Segurança Cibernética, ou, em inglês "Cyber Security", de acordo com Craigen, Diakun-Thibault e Purse (2014) é um termo muito utilizado, cujas definições são variáveis e, muitas vezes, subjetivas ou pouco informativas. Nesse sentido, a International Telecommunication Union, ou em português “União Internacional de Telecomunicações”, caracterizou a Segurança Cibernética como uma:
> [...] coleção de ferramentas, políticas, conceitos de segurança, salvaguardas de segurança, diretrizes, abordagens de gerenciamento de risco, ações, treinamento, melhores práticas, garantia e tecnologias que podem ser usadas para proteger o ambiente cibernético e a organização e os ativos do usuário. Os ativos da organização e do usuário incluem dispositivos de computação conectados, pessoal, infraestrutura, aplicativos, serviços, sistemas de telecomunicações e a totalidade das informações transmitidas e/ou armazenadas no ambiente cibernético. A segurança cibernética se esforça para garantir a obtenção e a manutenção das propriedades de segurança da organização e dos ativos do usuário contra riscos de segurança relevantes no ambiente cibernético. (ITU-T, 2008, p.2)

Além dessa definição, neste projeto será utilizado o conceito de Segurança Cibernética, mencionada ao longo deste trabalho como Cibersegurança, estabelecido pela Oxford University Press (2014), que caracteriza-a como um estado de proteção contra o uso criminoso ou não autorizado de dados eletrônicos, ou as medidas tomadas para isso (Apud Craigen et al, 2014).

Outrossim, considera-se importante para esse projeto a diferenciação entre Segurança da Informação e Cibersegurança. Nesse sentido, a Segurança da Informação, conforme explicitado por Hintzbergen et al. (2018), trata-se da preservação da Confidencialidade, Integridade e Disponibilidade da Informação. Nessa direção, entende-se que a área de atuação da Segurança da Informação é ampla, o que se diferencia da área de atuação da Segurança Cibernética que, como informado no parágrafo acima, corresponde apenas à proteção dos dados eletrônicos. Portanto, a Cibersegurança caracteriza-se como uma ramificação da Segurança da Informação.

#### Crimes Cibernéticos

De acordo com Wendt e Jorge (2013), os crimes cibernéticos são delitos praticados contra ou por meio de dispositivos informáticos (computadores, celulares, pendrives, etc). Nessa direção, os autores dividem os crimes cibernéticos em “crimes cibernéticos abertos” e “crimes exclusivamente cibernéticos”. Essa divisão também é realizada por Mendonça et al. (2015), na qual os crimes cibernéticos são divididos em  “crimes impróprios" e “crimes próprios”, os quais possuem o mesmo significado da divisão de Wendt e Jorge. 

Com isso, os crimes cibernéticos abertos, conforme afirmam Wendt e Jorge (2013), são aqueles que podem ser praticados da maneira tradicional (com ação física) ou por meio de dispositivos informáticos, isto é, os dispositivos são apenas meios opcionais para a realização do delito. Como exemplo desses crimes destacam-se: crimes contra a honra, racismo, tráfico de drogas, estelionato, entre outros. Já os crimes exclusivamente cibernéticos, são aqueles que só podem ser praticados com a utilização de dispositivos informáticos.

Por fim, para a realização deste projeto é de suma relevância a explicitação dos crimes cibernéticos, uma vez que a aplicação web terá conteúdos informacionais sobre como o usuário pode se proteger deles. 

#### Públicos Vulneráveis na Web

Com o avanço da Web e da internet, as informações passaram a estar presentes nesse meio virtual com bastante intensidade e, com isso, Fontes (2008) afirma que a Segurança da Informação é uma temática que tem ganhado espaço no cotidiano da sociedade, uma vez que essas informações estão disponíveis a muitas pessoas, sejam essas pessoas de uma organização, sejam essas pessoas usuárias da Web. 

Assim, com a presença da Segurança da Informação no ambiente computacional, há a criação do termo “Vulnerabilidade”, o qual pode ter variações relacionadas ao seu significado. De acordo com Hintzbergen et al. (2018), esse termo, vulnerabilidade, significa a fraqueza que um ativo ou controle pode ter e pode, também, ser explorada por ameaças. Peltier (2005) reforça essa definição, dizendo que a fraqueza também pode afetar um bem e que, caso um desses itens - ativo, controle ou bem - sejam de fato explorados por uma ameaça, isso poderá causar algum impacto, seja na organização, seja para um indivíduo. 

Dessa forma, o avanço da Web e das tecnologias fazem com que os eventos de vulnerabilidades, ocasionadas, majoritariamente, por ações pessoais, sejam reconhecidos de diversas maneiras e, uma delas, de acordo com Piekarski (2018), é a vulnerabilidade digital.

##### Crianças e Adolescentes

Como as Tecnologias de Informação e Comunicação se difundiram na sociedade, as crianças e adolescentes são um público alvo que, segundo Ferraz (2019), possuem um grande interesse pela utilização dos recursos que esses meios digitais oferecem. Diante disso, a inserção massiva das TICs e de mídias sociais, fizeram com que, de acordo com Couto (2013), as crianças passassem a estar cada vez mais conectadas e imersas nesse cibermundo e, com isso, o referido autor também aponta a criação de uma cibercultura infantil, a qual é definida como uma maneira de comportamento, de socialização e de troca de informações realizadas por crianças pela internet. Assim, esse público alvo estão, também, propensos às vulnerabilidades digitais. 

Com essa faixa etária de pessoas que se encontram cada vez mais conectadas, Ferraz (2019) aponta que as crianças desenvolvem suas habilidades com a tecnologia de forma rápida, fazendo com que elas entendam que esse ambiente virtual é um ambiente as quais estão fisicamente inacessíveis, além de terem uma liberdade maior de se comunicaram e de se expressarem. 

Além das crianças, os adolescentes também se encontram em vulnerabilidade no mundo virtual. A Pesquisa Nacional por Amostras de Domicílios (PNAD), realizada em 2015, demonstra que adolescentes que estão nas faixas etárias de 15 a 17 anos e de 18 a 19 anos, são os indivíduos que mais acessam a internet, o que equivale, respectivamente, a 82% e 82,9%. 

Os adolescentes, assim como as crianças, também veem a utilização dos recursos proporcionados pelas tecnologias como algo benéfico e, de acordo com Ferreira et al. (2020), as vantagens principais que os adolescentes reconhecem das tecnologias são a rapidez, a economia, a capacidade de conhecer pessoas e de aumentar o número de amigos. 

A TIC Kids Online Brasil de 2019 aponta que a utilização de mídias digitais - recurso tecnológico que é proveniente das Tecnologias de Informação e Comunicação - por crianças e adolescentes é algo excessivo e problemático, dado que essas faixas etárias estão submetidas aos diversos riscos que o mundo digital possui. 

Diante os expostos, Basile e Lopez (2020) expõem que a massiva utilização das tecnologias de informação aumenta a relevância do estudo sobre a defesa no mundo virtual. Ademais, há medidas que podem ser tomadas para a preservação e para a integridade das crianças e adolescentes, há, também, princípios, direitos e deveres para o uso da Internet no Brasil, as quais se encontram na Lei n° 12.965 de 23 de abril de 2014 - O Marco Civil da Internet.

##### Idosos

A tecnologia tornou-se o principal meio de comunicação e de informação na sociedade contemporânea e, Marioto e Basile (2020), apontam que a chegada dessas tecnologias TICs (Tecnologias de Informação e Comunicação) alteraram, significativamente, os modos de ser, estar, agir e interagir na sociedade, isto é, para se conviver no corpo social moderno, é necessário ter acesso ao conhecimento tecnológico. 

Dessa maneira, Marioto e Basile (2020), apontam, também, que os idosos, pessoas com mais de 60 anos de idade, constituem um grupo da sociedade que possuem especificidades no que se refere à inserção social realizada por meio da tecnologia. Assim, para que esse público da Terceira Idade não seja excluído das atividades sociais realizadas por intermédio da tecnologia e que não tenha sua qualidade de vida omitida pela falta de conhecimento dos aparatos tecnológicos, os autores afirmam que é de suma relevância o desenvolvimento de atividades de ensino e aprendizagem, as quais atendam as especificidades desse grupo. Essas atividades de ensino e aprendizagem podem ser realizadas, com, por exemplo, a escrita de artigos que serão disponibilizados pelas tecnologias TICs. 

A Terceira Idade, de acordo com Barros e Leite (2019), está exposta aos diversos perigos na internet, seja devido a falta de habilidades digitais, seja pelo declínio que essas pessoas estão vivenciando das competências cognitivas. As autoras também demonstram que esses aspectos fazem com que esse grupo se torne mais vulnerável aos golpes virtuais. Por isso, os idosos são vistos por cibercriminosos como alvos fáceis para aplicação de golpes. Isso é reforçado por Machado et al. (2019), que aponta que esse grupo de pessoas possuem habilidades e conhecimentos a serem desenvolvidos sobre essa temática. 

Assim, as atividades de ensino e aprendizagem, através de artigos digitais, servirão de garantia para que os idosos consigam utilizar de forma segura a internet. A Segurança e Privacidade na Internet, de acordo com Silva (2018), conforme citado por Machado et al. (2019), é uma competência de extrema importância para os idosos e, para que eles consigam desenvolver essa competência, esse grupo de pessoas poderão utilizar ferramentas na internet para desenvolver cuidados relacionados ao mundo virtual, evitando o roubo de dados e informações pessoais. 