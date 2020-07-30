<h1 align="center">
  <img alt="Aluizio Dveloper" src="src/assets/logotipo.png" width="200px" />
</h1>

<h3 align="center">
  API Node.js com Sequelize e Postgres
</h3>

<p align="center">API Node.js com base de dados Postgres, configuração do Sequelize ORM, migrations, relacionamentos e muito mais!</p>


## 🎓 Curso: Ambiente de desenvolvimento no Windows 10 com WSL2 e Docker

Configure o seu ambiente para desenvolvimento de aplicações no Windows 10, usando WSL versão 2 (Windows Subsystem Linux) com Docker.

Este repositório será usado para a prática com Docker e também para o deploy em produção.


### Para quem é este curso?

Este curso se aplica aquelas pessoas que estão iniciando com desenvolvimento de aplicações ou mesmo aqueles que já trabalham na área, porém ainda não conseguiram ajustar o seu ambiente de desenvolvimento no Windows 10.

Se você trabalha como desenvolvedor de apps no Windows, mas usa o Linux em dual boot ou em máquina virtual, com certeza este curso será útil para você também.

### Principais assuntos abordados no curso:

1. WSL versão 2;
2. Ferramentas para customizar o ambiente de dev;
3. Windows Terminal;
4. Docker Desktop;
5. Containers e Imagens Docker;
6. Exemplo de deploy de app Node.js/Postgres usando Docker;
7. Conhecendo algumas ferramentas para facilitar a manutenção do app em produção;
8. Dicas Extras.


## 🏆 Usando a API

### Pré-requisitos para executar

- [GIT](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/pt-BR/docs/install)

### Instalação e execução

1. Faça um clone do repositório: `git clone https://github.com/jorgealuizio/exemplo-nodejs-postgres.git`.

2. Entre na pasta `cd exemplo-nodejs-postgres`.
   
3. Execute o comando `yarn` para instalar as dependências.
   
4. Preencha as variáveis de ambiente no arquivo `.env`.
   
5. Execute o comando `yarn sequelize db:create` para criar o banco de dados.
   
6. Execute o comando `yarn sequelize db:migrate` para executar as migrations.
   
7. Execute o comando `yarn dev` para iniciar o projeto (servidor), que estará disponível através da url `http://localhost:3333`.


## 🤝 Contato

[Blog](https://aluiziodeveloper.com.br)

[Github](https://github.com/jorgealuizio)


## 📝 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.
