<h1 align="center">
  <img width="206" alt="gobarber" src="/public/Logo.png">
</h1>

## 💥 Barber MS | Barbearia

Este projeto propõe a criação de um sistema de agendamento para barbearias, visando otimizar o processo de marcação de horários tanto para os clientes quanto para os profissionais. Utilizando tecnologias modernas como Next.js, React e PostgreSQL, nossa intenção é desenvolver uma aplicação web robusta, escalável e amigável para proporcionar uma experiência fluida aos usuários.

## Índice
- 🚀 [Funcionalidades](#-funcionalidades)
- ⚙ [Tecnologias utilizadas](#-tecnologias)
- 💻 [Instruções para o back end](#-instruções-para-o-back-end)
- 💻 [Instruções para o front end](#-instruções-para-o-front-end)
- 🐞 [Executandos testes](#-executando-testes)
- 📸 [Interfaces da aplicação](#-interfaces-da-aplicação)

---

## 🚀 Funcionalidades
- Recuperação de senha
  - **Requisitos Funcionais**
    - O usuário deve poder recuperar sua senha informando o seu e-mail;
    - O usuário deve receber um e-mail com instruções de recuperação de senha;
    - O usuário deve poder resetar sua senha

  - **Regras de Negócios**
    - O link enviado por e-mail para resetar a senha deve expirar em 2h;
    - O usuário precisa confirmar a nova senha ao resetar;

- Atualização do perfil
  - **Requisitos Funcionais**
    - O usuário deve poder atualizar seu nome, e-mail e senha

  - **Regras de Negócios**
    - O usuário não pode alterar seu e-mail para um já utilizado por outro usuário;
    - Para atualizar sua senha, o usuário deve informar a senha antiga;

- Painel do prestador
  - **Requisitos Funcionais**
    - O usuário deve poder listar seus agendamentos de um dia específico;
    - O prestador deve receber uma notificação sempre que houver um novo agendamento;
    - O prestador deve poder visualizar as notificações não lidas;

  - **Requisitos Não-Funcionais**
    - Os agendamentos do prestador no dia devem ser armazenados em cache;
    - As notificações do prestador devem ser armazenadas no Banco;
    - As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io;

  - **Regras de Negócios**
    - A notificação deve ter um status de lida ou não-lida para que o prestador possa controlar;

- Agendamento de serviços
  - **Requisitos Funcionais**
    - O usuário deve poder listar todos os prestadores de serviços cadastrados;
    - O usuário deve poder listar os dias, com pelo menos um horário disponível, de um prestador em um mês específico;
    - O usuário deve poder listar os horários disponíveis em um dia específico de um prestador;
    - O usuário deve poder realizar um novo agendamento com um prestador;

  - **Requisitos Não-Funcionais**
    - A listagem de prestadores deve ser armazenada em cache;

  - **Regras de Negócios**
    - Cada agendamento deve duar 1h exatamente;
    - Os agendamentos devem estar disponíveis entre 8h às 18h (primeiro às 8h e último às 17h);
    - O usuário não pode agendar em um horário já ocupado;
    - O usuário não pode agendar em um horário que já passou;
    - O usuário não pode agendar serviços consigo mesmo;
---

## ⚙ Tecnologias
  - **Back end**
    - nodeJS
    - express
    - typescript
    - typeorm
    - postgres
    - mongodb
    - redis
    - uuidv4
    - date-fns
    - multer
    - celebrate/joi
    - dotenv
    - class-transformer
    - jest/ts-jest
    - rate-limiter-flexible
    - Amazon SES
    - Amazon S3

  - **Front end**
    - react
    - typescript
    - axios
    - react-router-dom
    - styled-components
    - polished
    - react-spring
    - yup
    - date-fns
    - react-day-picker

  - **Outras tecnologias**
    - Docker
    
---

## 💻 Instruções para o back end

  Começaremos criando as instâncias dos nossos bancos de dados. Para esse projeto, o **docker** foi utilizado. Abaixo, seguem os comandos para criar os containers e inicializar as instâncias:

  ```bash
    # Criando container com instância do postgres
    docker run --name postgres -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres

    # Criando container com instância do mongo
    docker run --name mongodb -p 27017:27017 -d -t mongo

    # Criando container com instância do redis
    docker run --name redis -p 6379:6379 -d -t redis:alpine

    # Inicializando as instâncias
    docker start postgres mongodb redis
  ```

  Primeiramente, você precisará criar um arquivo contendo as informações de acesso ao seu banco de dados. Esta aplicação foi desenvolvida utilizando o **Postgres** e **MongoDB**. Crie um arquivo chamado *ormconfig.json* na pasta `backend` e preencha conforme o arquivo-modelo *ormconfig.example.json*. Lembre-se, antes de rodar as migrations, de criar o banco de dados e informar o nome da sua base no arquivo *ormconfig.json*.
  
  ```bash
    # Acessar a pasta do back end
    cd backend

    # Baixar as dependências
    yarn

    # Executar as migrations
    yarn typeorm migration:run

    # Inicializar o servidor de desenvolvimento
    yarn dev:server
  ```

  Será necessário criar também um arquivo *.env*, que conterá as variáveis de ambiente. Use *.env.example* como modelo.

---

## 💻 Instruções para o front end
 
  Após executar o passo anterior e garantir que o back end está rodando, você poderá inicializar o front end:

  ```bash
    # Acessar a apsta do front end
    cd frontend

    # Baixar as dependências
    yarn

    # Inicializar a aplicação
    yarn start
  ```

## 🐞 Executando testes

  ```bash
    # Acessar a pasta do back end
    cd backend

    # Executando testes
    yarn test
  ```

## 📸 Interfaces da aplicação
  > Em desenvolvimento

*Páginas de Login e de Cadastro*

<img src="" />

*Páginas de Dashboard e Perfil*

<img src="" />
 