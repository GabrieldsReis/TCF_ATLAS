# 🗺️ Projeto ATLAS: Mini Rede Social

O **ATLAS** é um sistema Full-Stack desenvolvido como um Trabalho de Conclusão. Ele funciona como uma plataforma interativa (estilo mini rede social/fórum) onde os usuários podem se cadastrar, compartilhar postagens com imagens e trocar mensagens entre si.

O sistema foi construído utilizando uma arquitetura separada, com o front-end consumindo dados no formato JSON de uma API RESTful construída nativamente em PHP.

## ✨ Principais Funcionalidades

* **Gestão de Usuários:** Cadastro de novos usuários e controle de permissões (nível usuário/administrador).
* **Feed de Postagens:** Criação e exibição de posts contendo textos e upload de imagens.
* **Sistema de Mensagens:** Troca de mensagens diretas entre os usuários cadastrados na plataforma.
* **Integração Front e Back:** Comunicação via requisições assíncronas (CORS configurado) entre a interface React e o servidor PHP.

## 🚀 Tecnologias Utilizadas

* **Front-end:** React.js (com `react-router-dom` para navegação)
* **Back-end:** PHP (Scripts atuando como endpoints da API)
* **Banco de Dados:** MySQL / MariaDB (Script de estruturação em `tcc_atlas.sql`)

## 📁 Estrutura do Projeto

* `/src` e `/public`: Contém a interface do usuário (SPA) e as páginas do sistema em React.
* `/php_atlas`: Contém as lógicas de negócio e as APIs (`Cadastro.php`, `Ler_Posts.php`, etc.) que conectam o sistema ao banco de dados.
* `tcc_atlas.sql`: Arquivo contendo a estrutura completa das tabelas (`usuarios`, `postagens`, `mensagens`) e os dados para teste.

## ⚙️ Como executar localmente

Para rodar este projeto na sua máquina, você precisará do Node.js instalado e de um servidor local para o PHP e MySQL (como XAMPP ou WAMP).

1. **Banco de Dados:** Importe o script `tcc_atlas.sql` no seu phpMyAdmin (ou similar) para criar o banco de dados `tcc_atlas`.
2. **Back-end:** Copie a pasta `php_atlas` para o diretório público do seu servidor web (ex: pasta `htdocs` no XAMPP). Inicie o Apache e o MySQL.
3. **Front-end:** Abra o terminal na raiz do repositório e instale as dependências do React:
   ```bash
   npm install
