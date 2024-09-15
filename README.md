

# Projeto de Formulário de Perguntas

Este projeto é um formulário em React que coleta informações dos usuários por meio de um conjunto de perguntas. O formulário é projetado para capturar uma variedade de dados e, após o envio, redireciona o usuário para uma página de detalhes.

## Funcionalidades

- **Formulário de Perguntas:** Coleta dados sobre a profissão, interesses, referências e outros aspectos relevantes através de perguntas.
- **Campos Condicionais:** Exibe campos de texto adicionais se o usuário selecionar a opção "Outros" nas respostas.
- **Navegação:** Após o envio do formulário, o usuário é redirecionado para uma página de detalhes.
- **Validação de Campos:** Garante que todos os campos obrigatórios sejam preenchidos antes de permitir o envio do formulário.

## Estrutura do Projeto

O projeto é organizado da seguinte forma:

- **src/**: Contém todos os arquivos fonte da aplicação.
  - **components/**: Pasta com os componentes React.
    - `Questions.js`: Componente principal que renderiza o formulário de perguntas.
  - `App.js`: Componente principal que usa o componente `Questions`.
  - `index.js`: Ponto de entrada da aplicação.
  - **styles/**: Pasta para arquivos de estilo (CSS ou SCSS).

## Instruções de Instalação

1. **Clone o Repositório:**

   Use o comando para clonar o repositório do GitHub para o seu ambiente local.
2. **Navegue para o Diretório do Projeto:**

   Acesse o diretório do projeto clonado.
3. **Instale as Dependências:**

   Instale as dependências necessárias usando o gerenciador de pacotes.
4. **Inicie o Servidor de Desenvolvimento:**

   Inicie o servidor de desenvolvimento para executar a aplicação localmente.

## Estrutura do Código

### Componente `Questions.js`

Este componente renderiza um formulário com 20 perguntas. O estado do formulário é gerenciado internamente e as mudanças nos campos são tratadas por meio de eventos.

#### Principais Funções

- Atualização do estado com base nas entradas do usuário.
- Validação dos campos obrigatórios antes do envio.
- Redirecionamento para uma página de detalhes após o envio do formulário.

### Navegação

O redirecionamento do usuário após o envio do formulário é gerenciado por uma navegação para a rota `/details`, onde detalhes adicionais podem ser visualizados.

## Contribuindo

Para contribuir com este projeto:

1. Faça um fork do repositório.
2. Crie uma nova branch para suas alterações.
3. Faça suas alterações e commit.
4. Envie suas alterações para a branch.
5. Abra um pull request no repositório principal.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

## Contato

Para dúvidas ou sugestões, entre em contato por email.

---

Obrigado por utilizar este projeto!
