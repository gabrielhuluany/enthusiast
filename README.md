<div align="center">
    <img src="front/Enthusiast/src/assets/img/logo/logo.png" height="100px" width=""/>
    <h3>Enthusiast: E-commerce de Hardware Entusiasta e High-End</h3>
    <h6>v1.0 (build 07.06.2023)</h6>
    <p>A3</p>
    <p>Sistemas distribuídos e mobile</p>
    <p>Usabilidade, desenvolvimento web, mobile e jogos</p>
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
    <br>
    <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white"/>
    <img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white"/>
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
    <br>
    <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white"/>
    <img src="https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white"/>
    <img src="https://img.shields.io/badge/Hibernate-59666C?style=for-the-badge&logo=Hibernate&logoColor=white"/>
    <img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white"/>
    <!--img src="http://ForTheBadge.com/images/badges/built-with-love.svg"/>
    <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white"/>
    <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"/-->
</div>
<br>

       SPA
       API REST
       CRUD

## Getting Started: Guia de instalação e execução

### Front-end

#### Instalação

Caso não tenha instalado em sua máquina, realize a instalação dos seguintes programas:
- [Node.js 18.16.0 LTS ou superior](https://nodejs.org/pt-br/download): Necessário para executar os comandos do npm e o angular.
- [npm 9.6.7 ou superior](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm): Necessário para realizar a instalação das dependências. Normalmente já é instalado com o Node.js. Para atualizar execute o seguinte comando no terminal `npm install npm@9.6.7`
- [Angular CLI 16.0.3 ou superior](https://angular.io/guide/setup-local#install-the-angular-cli): Necessário para realizar o build e executar. Para facilitar aqui está o comando que deverá ser executado no terminal: `npm install -g @angular/cli`

Concluídas as instalações abra o terminal de sua preferência (recomendamos o PowerShell e o Windows Terminal).
<img src="https://img.shields.io/badge/Powershell-2CA5E0?style=for-the-badge&logo=powershell&logoColor=white"/> <img src="https://img.shields.io/badge/windows%20terminal-4D4D4D?style=for-the-badge&logo=windows%20terminal&logoColor=white"/>

Execute os seguintes comandos:
`node -v`
`npm -v`
`ng version`

Confira se as versões estão de acordo com as especificadas acima. Em caso positivo prossiga com o guia.

#### Execução

Abra a IDE de sua preferência (recomendamos o Visual Studio Code e o IntelliJ IDEA Ultimate) para visualizar os arquivos e executar o projeto.
<img src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white"/> <img src="https://img.shields.io/badge/IntelliJ_IDEA-000000.svg?style=for-the-badge&logo=intellij-idea&logoColor=white"/>

Para executar o projeto angular navegue até o diretório onde ele se encontra, neste caso 'front/Enthusiast', e execute o comando `ng serve` no terminal.
Como o diretório node_modules está no .gitignore (não está versionado) é possível que uma mensagem de erro seja retornada, neste caso execute primeiro o comando `npm install -g @angular/cli` e após sua conclusão verifique se o diretório node_modules foi criado, em caso positivo enfim execute o comando `ngserve`.

Opções de comandos com argumentos:
`ngserve --open` abre automaticamente no seu navegador padrão
`ngserve --port 4200` abre na porta especificada, neste caso 4200
`ngserve --open --port 4200` ambos os argumentos

Aguarde a mensagem de sucesso retornar o endereço para ser acessado em seu navegador. Provavelmente será na porta 4200, a porta padrão do angular: `http://localhost:4200`

Acesse em seu navegador de preferência (recomendamos o Google Chrome).
<img src="https://img.shields.io/badge/Google_chrome-4285F4?style=for-the-badge&logo=Google-chrome&logoColor=white"/>

Caso alguma dependência não tenha sido instalada automaticamente pelo npm, você pode realizar a instalação manualmente executando o seguinte comando no diretório do projeto angular:
`npm install` o comando install sem argumentos baixa automaticamente todas as dependências listadas no package.json
Caso prefira realizar a instalação separadamente das dependências:
`npm install bootstrap@v5.3.0` versão 5.3.0 ou superior
`npm install bootstrap-icons` versão 1.10.5 ou superior
`npm install jquery` versão 3.7.0 ou superior

<hr>

### Back-end

#### Instalação

Caso não tenha instalado em sua máquina, realize a instalação dos seguintes programas:
- [Java SE Development Kit (JDK) 20.0.1 ou superior](https://www.oracle.com/java/technologies/javase/jdk20-archive-downloads.html): Necessário para executar o projeto java.
- [MySQL 8.0.33 ou superior](https://dev.mysql.com/downloads/installer/): Necessário para gerenciar o banco de dados MySQL. Recomendamos que faça a instalação do pacote completo.

#### Execução

Adicione o JDK do Java 20 ao projeto em sua IDE e aguarde a instalação automática das dependências.

Caso seja necessário, siga as instruções nos arquivos `application.properties` e `CorsConfiguration.java` e faça as alterações.

Execute as consultas do arquivo `MySQL Query.sql` no MySQL Workbench ou MySQL Command Line Client.

Execute o projeto e aguarde a mensagem de sucesso do Spring. Em caso positivo, confirme se houve sucesso na criação das tabelas e colunas no Banco de Dados.

Você pode consumir nossa API utilizando nosso projeto angular ou utilizando programas como o Postman e o Insomnia, o que for de sua preferência. Temos algumas requisições JSON prontas disponíveis em: [User](https://github.com/gabrielhuluany/enthusiast/blob/main/back/User.postman_collection.json) e [Product](https://github.com/gabrielhuluany/enthusiast/blob/main/back/Product.postman_collection.json).

*Obs: Para que os dados do primeiro produto da página inicial sejam preenchidos é necessário executar a requisição `addProduct` pelo Postman ou adicionar os dados diretamente no Banco de Dados (com o caminho correto da imagem).