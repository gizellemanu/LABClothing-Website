# LAB Clothing Collection - DEVinHouse 
_Módulo 1 - Projeto Avaliativo_

A LABFashion LTDA é uma empresa líder no setor de tecnologia para gestão de moda e está lançando um novo projeto intitulado LAB Clothing Collection. 

## Tecnologias utilizadas
Este projeto foi desenvolvido usando [Angular CLI](https://github.com/angular/angular-cli) versão 15.1.5.


## Descrição do projeto
A aplicação contem os seguintes:
- **Item 1**. Uma Tela de Login, contendo um formulário com campos de email e senha.<br/>
    . _O formulario de login so e validado com os campos preenchidos corretamente;_<br/>
    . _A senha deve conter 8 caracteres._

- **Item 2**. Uma Tela de Esqueci a Senha contendo um simples formulário com o campo de e-mail.<br/>
    . _O formulario de Esqueci a Senha so e validado com o campo preenchidos corretamente._

- **Item 3**. Uma Tela de Cadastro de Usuário contendo um formulário com os campos de nome, nome da empresa, cnpj, e-mail.<br/>
    . _O formulario de Cadastro de Usuário so e validado com os campos preenchidos corretamente;_<br/>
    . _A senha deve conter 8 caracteres;_<br/>
    . _No campo confimaçao de senha, tambe possui validação, caso sejam divergentes nao sera possivel o cadastro;_<br/>
    . _O cnpj deve conter 14 caracteres._

- **Item 4**. Um Menu Lateral , contendo as opções Dashboard, Coleções, Modelos, Obter Ajuda, Enviar Comentários.

- **Item 5**. Uma Tela de Dashboard.<br/>
    . contendo 3 cards: Total de coleções _(Exibir o total de coleções cadastradas no json-server)_ , modelos _(Exibindo total de modelos)_ e média de orçamento por coleção _(Soma de todos os orçamentos das coleções / total de coleções)_, e uma tabela contendo os 5 maiores orçamentos dentre as coleções;

- **Item 6**. Uma Tela de Listagem de Coleções.<br/>
    . _Ao clicar na linha contendo a coleçao desejada, o usuario e direcionado para a tela de ediçao, podendo fazer a edição desejada, clicando no botao salvar;_<br/>
    . _Ao clicar na linha contendo a coleçao desejada, o usuario e direcionado para a tela de ediçao, podendo deletar a coleção desejada, clicando no botao delet;_<br/>
    . _Ao clicar na linha contendo a coleçao desejada, o usuario e direcionado para a tela de ediçao, caso nao deseje editar ou deletar, podera clicar no botao cancelar sendo direcionado para a tela Listagem de Coleções._

- **Item 7**. Uma Tela de Cadastro de Coleção, contendo um formulário com os campos nome, responsável, estação, marca, orçamento e ano de lançamento.<br/>
    . _Apos preencher os campos, podera clicar em salvar, caso nao deseje criar uma nova coleçao, podera clicar em cancelar e ser direcionado par a tela Listagem de Coleções._

- **Item 8**. Uma Tela de Edição de Coleção , contendo um formulário com os campos nome, responsável, estação, marca, orçamento e ano de lançamento.

- **Item 9**. Uma Tela de Listagem de Modelos.<br/>
    . _Ao clicar na linha contendo o modelo desejado, o usuario e direcionado para a tela de modelo, podendo fazer a edição desejada, clicando no botao salvar;_<br/>
    . _Ao clicar na linha contendo a modelo desejado, o usuario e direcionado para a tela de ediçao, podendo deletar o modelo desejada, clicando no botao delet;_<br/>
    . _Ao clicar na linha contendo a modelo desejado, o usuario e direcionado para a tela de ediçao, caso nao deseje editar ou deletar, podera clicar no botao cancelar sendo direcionado para a Listagem de Modelos._

- **Item 10**. Uma Tela de Cadastro de Modelos , contendo um formulário com os campos nome, responsável;

- **Item 11**. Uma Tela de Edição de Modelos , contendo um formulário com os mesmos campos presentes no Cadastro de Modelos.


## Como executar o projeto
Antes de utilizar esta aplicação, é necessário ter o Node.js e o Angular CLI instalados em seu computador. Para começar, clone o repositório ou faça o download do código fonte. Depois, instale as dependências utilizando o comando npm install no terminal.

__Instalando o Node.js__
- **Item 1**. Acesse o site oficial do Node.js em `https://nodejs.org/en/download/`. <br/>
- **Item 2**. Selecione a opção de download correspondente ao seu sistema operacional.<br/>
- **Item 3**. Baixe e execute o instalador do Node.js. Siga as instruções do instalador para concluir a instalação.

__Instalando o Angular CLI__
-**Item 1**. Abra o terminal do seu sistema operacional "prompt de comando". <br/>
- **Item 2**. Execute o seguinte comando para instalar o Angular CLI: npm install -g @angular/cli<br/>
- **Item 3**. Aguarde o término da instalação. Pronto! Agora você já tem o Node.js e o Angular CLI instalados em seu computador e pode executar a aplicação Angular.<br/>

_Para iniciar o servidor, execute_ `ng serve` _para um servidor de desenvolvimento. Navegue para_ `http://localhost:4200/`_. A aplicação será recarregada automaticamente se você alterar qualquer um dos arquivos de origem._

## Funcionalidades do projeto
Trata-se de um software inovador que tem como objetivo gerenciar coleções de moda e os modelos de criação no segmento de vestuário de forma eficiente e avançada.

## Estrutura de diretórios
LAB-Clothing-Collection\src\app\components
    ..\leadoff
            1. navbar
            2. parent
            3. sidebar
            
     ..\pages
            1. colectionedit
            2. colectionlist
            3. colectionsheet
            4. dashboard
            5. modellist
            6. modeledit
            7. modelsheet
            8. userconfirmationpassword
            9. userlogin
            10. userpassword
            11. userregister
            
    ..\service 
            1. collection
            2. model
            
\LAB-Clothing-Collection\db.json

## Autores
Gizelle Emanuela da Silva
