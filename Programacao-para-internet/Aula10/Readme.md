# Trabalho aula 10

## Organização do Projeto

### Config
- Contém o arquivo de configuração de conexão com o banco de dados

### Controller
 - Contém as funções de callbacks acionadas nas **Rotas**, juntamente com a integração ao banco de dados

### Rotas
- Contém os imports das funções do **Controller**, indicando o endereço o qual são chamadas, bem como o tipo de requisição que as acessam.

### app.js
- Contém o import das Rotas e o endereço "base" para acessá-las;

