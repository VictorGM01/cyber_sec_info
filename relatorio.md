# Cyber Security Information - PJI 2022 - IFSP
![image](https://user-images.githubusercontent.com/86068797/166588543-9ff49eb2-8926-4de9-8c27-27d4936941e7.png)

> ## Tabela de Conteúdos
* [Tema e Autores](#tema-e-autores)
* [Introdução](#introdução)
  * [Objetivos](#objetivos)
    * [Objetivo Geral](#objetivo-geral)
    * [Objetivos Específicos](#objetivos-especficos)
  * [Justificativa](#justificativa)
* [Revisão de Literatura]()
  * [Acessibilidade]()
    * [Acessibilidade Web]()
    * [Acessibilidade Web em Dispositivos Móveis]()
    * [Acessibilidade Web e a Inclusão Informacional]()
  * [Segurança Cibernética]()
    * [Crimes Cibernéticos]()
    * [Públicos Vulneráveis na Web]()
      * [Crianças e Adolescentes]()
      * [Idosos]()
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
