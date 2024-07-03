<img align="right" height="30" width="40" src="https://www.svgrepo.com/show/508668/flag-us.svg" alt="English">

# LAB Clothing Collection

The LAB Clothing Collection project aims to serve the technology sector in fashion management. This repository presents the proposal of a software designed to efficiently manage fashion collections and creation models in the clothing segment.

## Certificate of Completion
> _This project was developed during the [DEVinHouse | Audaces](https://devinhouse.tech/) course, conducted by [SENAI](https://cursos.sesisenai.org.br/curso/devinhouse/525)._<br>
> You can access the certificate directly [→ here ←](https://github.com/gizellemanu/LABClothing-Website/blob/master/Certificado.pdf).
## _Table of Contents_
- [_How to Run the Project_](#how-to-run-the-project)
- [_Project Features_](#project-features)
- [_Directory Structure_](#directory-structure)
- [_Authors_](#authors)

## _Project Features_
The application includes the following features:<br>
- **1**. A Login Screen containing a form with email and password fields.
  > - _The login form is only validated with correctly filled fields._
  > - _The password must be 8 characters long._
- **2**. A Forgot Password Screen containing a simple form with an email field.
  > - _The Forgot Password form is only validated with a correctly filled field._
- **3**. A User Registration Screen containing a form with fields for name, company name, CNPJ, and email.
  > - _The User Registration form is only validated with correctly filled fields._
  > - _The password must be 8 characters long._
  > - _The password confirmation field is also validated; if they do not match, registration is not possible._
  > - _The CNPJ must be 14 characters long._
- **4**. A Sidebar Menu containing options for Dashboard, Collections, Models, Get Help, and Send Feedback.

- **5**. A Dashboard Screen.
  > - Contains 3 cards: Total Collections _(Displays the total collections registered on the json-server)_, Models _(Displays the total models)_, and Average Budget per Collection _(Sum of all collection budgets / total collections)_, and a table containing the 5 highest budgets among the collections.
- **6**. A Collection Listing Screen.
  > - _By clicking on the row containing the desired collection, the user is directed to the edit screen, where they can make the desired edit and save._
  > - _By clicking on the row containing the desired collection, the user is directed to the edit screen, where they can delete the desired collection by clicking delete._
  > - _By clicking on the row containing the desired collection, the user is directed to the edit screen. If they do not wish to edit or delete, they can click cancel and be redirected to the Collection Listing screen._
- **7**. A Collection Registration Screen, containing a form with fields for name, responsible person, season, brand, budget, and release year.
  > - _After filling out the fields, they can click save. If they do not wish to create a new collection, they can click cancel and be redirected to the Collection Listing screen._
- **8**. A Collection Editing Screen, containing a form with fields for name, responsible person, season, brand, budget, and release year.

- **9**. A Model Listing Screen.
  > - _By clicking on the row containing the desired model, the user is directed to the model screen, where they can make the desired edit and save._
  > - _By clicking on the row containing the desired model, the user is directed to the edit screen, where they can delete the desired model by clicking delete._
  > - _By clicking on the row containing the desired model, the user is directed to the edit screen. If they do not wish to edit or delete, they can click cancel and be redirected to the Model Listing screen._
- **10**. A Model Registration Screen, containing a form with fields for name and responsible person.

- **11**. A Model Editing Screen, containing a form with the same fields as in the Model Registration.

## _How to Run the Project_

Before using this application, you need to have Node.js and Angular CLI installed on your computer. This project was developed using Angular CLI version 15.1.5. Follow the steps below to install and configure the development environment:

### Installing Node.js
1. Go to the official Node.js website at [https://nodejs.org/en/download/](https://nodejs.org/en/download/).
2. Select the download option corresponding to your operating system.
3. Download and run the Node.js installer. Follow the installer instructions to complete the installation.

### Installing Angular CLI
1. Open your operating system's terminal.
2. Run the following command to install Angular CLI:
    ```bash
    npm install -g @angular/cli@15.1.5
    ```
3. Wait for the installation to complete.

### Installing Project Dependencies
1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/your-repository.git
    ```
2. **Navigate to the project directory**:
    ```bash
    cd your-repository
    ```
3. **Install the dependencies**:
    ```bash
    npm install
    ```

### Running the Application
1. To start the development server, run:
    ```bash
    ng serve
    ```
2. Navigate to [http://localhost:4200/](http://localhost:4200/). The application will automatically reload if you change any of the source files.

## _Directory Structure_
```plaintext
LAB-Clothing-Collection
└── src
    └── app
        └── components
            ├── navbar
            ├── parent
            └── sidebar
        └── pages
            ├── collectionedit
            ├── collectionlist
            ├── collectionsheet
            ├── dashboard
            ├── modellist
            ├── modeledit
            ├── modelsheet
            ├── userconfirmationpassword
            ├── userlogin
            ├── userpassword
            └── userregister
        └── service 
            ├── collection
            └── model
└── db.json
```
## Authors
```
Gizelle Emanuela da Silva
```



<br>
<hr>
<img align="right" height="30" width="40" src="https://www.svgrepo.com/show/405433/flag-for-flag-brazil.svg" alt="Portugues">

# LAB Clothing Collection
Denominado LAB Clothing Collection o projeto procura atender o setor de tecnologiana gestão de moda, este repositorio apresenta a proposta de um software que tem como objetivo gerenciar coleções de moda e os modelos de criação no segmento de vestuário de forma eficiente. . 

## Certificado de Conclusão
> _Este projeto foi desenvolvido durante o curso [DEVinHouse | Audaces](https://devinhouse.tech/), ministrado por [SENAI](https://cursos.sesisenai.org.br/curso/devinhouse/525)._<br>
>  Você pode acessar o certificado diretamente [→ aqui ←](https://github.com/gizellemanu/LABClothing-Website/blob/master/Certificado.pdf). 
## _Índice_
- [_Como Executar o Projeto_](#como-executar-o-projeto)
- [_Funcionalidades do Projeto_](#funcionalidades-do-projeto)
- [_Estrutura de Diretórios_](#estrutura-de-diretórios)
- [_Autores_](#autores)

## _Funcionalidades do Projeto_
A aplicação contém as seguintes funcionalidades:
- **1**. Uma Tela de Login, contendo um formulário com campos de email e senha.
  > - _O formulário de login só é validado com os campos preenchidos corretamente._
  > - _A senha deve conter 8 caracteres._
- **2**. Uma Tela de Esqueci a Senha contendo um simples formulário com o campo de e-mail.
  > - _O formulário de Esqueci a Senha só é validado com o campo preenchido corretamente._
- **3**. Uma Tela de Cadastro de Usuário contendo um formulário com os campos de nome, nome da empresa, cnpj, e-mail.
  > - _O formulário de Cadastro de Usuário só é validado com os campos preenchidos corretamente._
  > - _A senha deve conter 8 caracteres._
  > - _No campo confirmação de senha, também possui validação, caso sejam divergentes não será possível o cadastro._
  > - _O cnpj deve conter 14 caracteres._
- **4**. Um Menu Lateral, contendo as opções Dashboard, Coleções, Modelos, Obter Ajuda, Enviar Comentários.

- **5**. Uma Tela de Dashboard.
  > - Contendo 3 cards: Total de coleções _(Exibir o total de coleções cadastradas no json-server)_, modelos _(Exibindo total de modelos)_ e média de orçamento por coleção _(Soma de todos os orçamentos das coleções / total de coleções)_, e uma tabela contendo os 5 maiores orçamentos dentre as coleções.
- **6**. Uma Tela de Listagem de Coleções.
  > - _Ao clicar na linha contendo a coleção desejada, o usuário é direcionado para a tela de edição, podendo fazer a edição desejada, clicando no botão salvar._
  > - _Ao clicar na linha contendo a coleção desejada, o usuário é direcionado para a tela de edição, podendo deletar a coleção desejada, clicando no botão deletar._
  > - _Ao clicar na linha contendo a coleção desejada, o usuário é direcionado para a tela de edição, caso não deseje editar ou deletar, poderá clicar no botão cancelar sendo direcionado para a tela Listagem de Coleções._
- **7**. Uma Tela de Cadastro de Coleção, contendo um formulário com os campos nome, responsável, estação, marca, orçamento e ano de lançamento.
  > - _Após preencher os campos, poderá clicar em salvar, caso não deseje criar uma nova coleção, poderá clicar em cancelar e ser direcionado para a tela Listagem de Coleções._
- **8**. Uma Tela de Edição de Coleção, contendo um formulário com os campos nome, responsável, estação, marca, orçamento e ano de lançamento.

- **9**. Uma Tela de Listagem de Modelos.
  > - _Ao clicar na linha contendo o modelo desejado, o usuário é direcionado para a tela de modelo, podendo fazer a edição desejada, clicando no botão salvar._
  > - _Ao clicar na linha contendo o modelo desejado, o usuário é direcionado para a tela de edição, podendo deletar o modelo desejado, clicando no botão deletar._
  > - _Ao clicar na linha contendo o modelo desejado, o usuário é direcionado para a tela de edição, caso não deseje editar ou deletar, poderá clicar no botão cancelar sendo direcionado para a Listagem de Modelos._
- **10**. Uma Tela de Cadastro de Modelos, contendo um formulário com os campos nome, responsável.

- **11**. Uma Tela de Edição de Modelos, contendo um formulário com os mesmos campos presentes no Cadastro de Modelos.

## _Como Executar o Projeto_

Antes de utilizar esta aplicação, é necessário ter o Node.js e o Angular CLI instalados em seu computador. Este projeto foi desenvolvido usando Angular CLI versão 15.1.5. Siga os passos abaixo para instalar e configurar o ambiente de desenvolvimento:

### Instalando o Node.js
1. Acesse o site oficial do Node.js em [https://nodejs.org/en/download/](https://nodejs.org/en/download/).
2. Selecione a opção de download correspondente ao seu sistema operacional.
3. Baixe e execute o instalador do Node.js. Siga as instruções do instalador para concluir a instalação.

### Instalando o Angular CLI
1. Abra o terminal do seu sistema operacional.
2. Execute o seguinte comando para instalar o Angular CLI:
    ```bash
    npm install -g @angular/cli@15.1.5
    ```
3. Aguarde o término da instalação. 

### Instalando Dependências do Projeto
1. **Clone o repositório**:
    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    ```
2. **Navegue até o diretório do projeto**:
    ```bash
    cd seu-repositorio
    ```
3. **Instale as dependências**:
    ```bash
    npm install
    ```

### Executando a Aplicação
1. Para iniciar o servidor de desenvolvimento, execute:
    ```bash
    ng serve
    ```
2. Navegue para [http://localhost:4200/](http://localhost:4200/). A aplicação será recarregada automaticamente se você alterar qualquer um dos arquivos de origem.

## _Estrutura de Diretórios_
```plaintext
LAB-Clothing-Collection
└── src
│   └── app
│       └── components
│       │   ├── navbar
│       │   ├── parent
│       │   └── sidebar
│       └── pages
│       │   ├── colectionedit
│       │   ├── colectionlist
│       │   ├── colectionsheet
│       │   ├── dashboard
│       │   ├── modellist
│       │   ├── modeledit
│       │   ├── modelsheet
│       │   ├── userconfirmationpassword
│       │   ├── userlogin
│       │   ├── userpassword
│       │   └── userregister
│       └── service 
│           ├── collection
│           └── model
└── db.json
```
## Autores
```
Gizelle Emanuela da Silva
```
