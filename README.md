# Trabalho Prático: Etapa 1 - Teste de Software

### Alunos:
- Guilherme Pereira
- Icaro Henrique Vieira Pinheiro
- Joao Gabriel Paiva Gontijo

### Sistema
O sistema criado pode ser visto como um inventório de pokemons. A interface é basicamente um grid de cards, em que cada card representa um pokemon. Nesses cards, existem infromações como o id do pokemon, seu nome e uma imagem dele.  

Ao clicar em um card, o sistema redirecionará o usuário para a página específica do pokemon selecionado. Lá, haverão informações detalhadas do pokemon escolhido, como os status base - HP, attack, defense, special-attack, special-defense, speed - bem como dados sobe peso e altura, além dos types que o pokemon possui.  

Por fim, a página inicial do sistema também possui um campo de busca em tempo real. Nela, é possível buscar um pokemon pelo seu nome. Os resultados são mostrados conforme os caracteres são digitados.

### Tecnologias Utilizadas
A aplicação foi criada em React.js. O React é uma biblioteca JavaScript de código aberto usada para construir interfaces de usuário especificamente para aplicativos de página única.  

Além disso, para realizar os testes foi utilizado o Jest (um framework de testes para javascript), bem como as ferramentas da testing library do React para buscar os elementos na tela.


### Pré-Requisitos
Para rodar o sistema é preciso ter duas ferramentas instaladas, o node e o NPM.   

O node e o NPM podem ser baixados no seguinte site: https://nodejs.org/en/download/. Depois de baixar o arquivo, basta seguir o processo de instalação.

Caso possua um sistemna linux, o node pode ser instalado diretamente pelo terminal por meio do comando "sudo apt install nodejs". Para instalar o NPM basta digitar "sudo apt install npm" também no terminal.


### Instruções Para Execução
Para rodar o programa localmente, basta seguir os seguintes passos:
- Abrir o terminal dentro da pasta do sistema
- Digitar o comando npm install
- Digitar o comando npm start  
Depois que o último comando for executado, o sistema será aberto automaticamente em uma janela no navegador.


### CI/CI
O sistema criado possui um sistema de CI/CD automático por meio do GitHub Actions. Ao dar um push em uma mudança realizada, testes automatizados são rodados. Tais testes são úteis para verificar se as alterações feitas no código quebraram o sistema de alguma forma, ou introduziram bugs.