# Arquivos do projeto Teleinfo/Accenture com node.js + Typescript e com estrutura MVC.

# Aplicação Online [Teleinfo](https://accenture-em-nodejs.alvimarfelipe.repl.co)

### Para a execução local será necessário
 
- Instalar o [Node.js](https://nodejs.org/en/)
- MySQL
- Uma IDE (recomendo [vscode](https://code.visualstudio.com/download))
 
# Instalação
 
1. Baixe o Projeto por este repositório.
2. Execute no MySQL os SQLs, que podem ser baixados no [Google Drive](https://drive.google.com/drive/folders/1ZqCG1WZMkkPFTBpzTsRf6VkCUOyLtfyG?usp=sharing) seguindo a ordem = "Criação","Trabalhos","Funcionarios","Clientes" e "Atendimentos".
3. Altere as configurações do banco em [instances](https://github.com/AlvimarFelipe/Teleinfo-Accenture--em-Node.js/blob/main/src/instances/mysql.ts).
4. No terminal, de sua preferência, rode o código = `npm install` que ira instalar as dependências do projeto.
5. Ainda no terminal rode o código `npm run start-dev`
6. Se tudo ocorrer bem o projeto irá iniciar localmente na URL: [http:/localhost:2000](http:/localhost:2000)

 
# Explicação dos arquivos do projeto
 
## Na pasta [public](https://github.com/AlvimarFelipe/Teleinfo-Accenture--em-Node.js/tree/main/public)
 
- Existe a pasta [css](https://github.com/AlvimarFelipe/Teleinfo-Accenture--em-Node.js/tree/main/public/css) com os css utilizados.
- Existe a pasta [Fontes](https://github.com/AlvimarFelipe/Teleinfo-Accenture--em-Node.js/tree/main/public/Fontes) com as fontes utilizadas.
- Existe a pasta [imagens](https://github.com/AlvimarFelipe/Teleinfo-Accenture--em-Node.js/tree/main/public/imagens) com as imagens utilizadas.
- Existe a pasta [js](https://github.com/AlvimarFelipe/Teleinfo-Accenture--em-Node.js/tree/main/public/js) nela está a criação dos gráficos utilizando a estrutura do Chart.js e utilizando dados do banco puxados atravez de um fetch que se conecta a [GraficosControllers.ts](https://github.com/AlvimarFelipe/Teleinfo-Accenture--em-Node.js/blob/main/src/controllers/GraficosController.ts).
 
## Na pasta [src](https://github.com/AlvimarFelipe/Teleinfo-Accenture--em-Node.js/tree/main/src)
 
- Na pasta [controllers](https://github.com/AlvimarFelipe/Teleinfo-Accenture--em-Node.js/tree/main/src/controllers) está toda a estrutura que conecta os dados recebidos e os dados que irão aparecer no [Front-End](https://github.com/AlvimarFelipe/Teleinfo-Accenture--em-Node.js/tree/main/src/views/pages).
- Na pasta [instances](https://github.com/AlvimarFelipe/Teleinfo-Accenture--em-Node.js/tree/main/src/instances) está a conexão com o banco de dados.
- Na pasta [models](https://github.com/AlvimarFelipe/Teleinfo-Accenture--em-Node.js/tree/main/src/models) está a configuração de como é o banco de dados.
- Na pasta [routes](https://github.com/AlvimarFelipe/Teleinfo-Accenture--em-Node.js/tree/main/src/routes) estão todas as rotas do site.
- Na pasta [views](https://github.com/AlvimarFelipe/Teleinfo-Accenture--em-Node.js/tree/main/src/views) estão as páginas do site.
- O arquivo [server.ts](https://github.com/AlvimarFelipe/Teleinfo-Accenture--em-Node.js/blob/main/src/server.ts) é o arquivo que é executado para rodar o projeto.
