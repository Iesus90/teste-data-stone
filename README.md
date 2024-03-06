# Teste Data Stone

Olá! Em primeiro lugar, gostaria de expressar minha gratidão pela oportunidade de realizar este teste. Fiquei muito animado e satisfeito com o desafio proposto.

## Sobre o teste
O teste foi desafiador e me senti bastante satisfeito com o resultado e desempenho que obtive. Para abordar os desafios apresentados, optei por uma estratégia que consistia em dividir o objetivo principal em problemas menores e, então, resolvê-los de forma incremental até alcançar o objetivo final. Primeiro fiz a estrutura do componente de clientes e a logica de criação de um cliente, depois fiz o mesmo para os produtos. Posteriormente fiz o componente de associação e a logica de criação de uma associação e adicionei o gerenciador de estados na aplicação (Pessoalmente foi o que deu mais trabalho), depois que as logicas de criação de clientes, produtos e associações estavam prontas, separei cada componente e adicionei o gerenciador de rotas. Depois comecei a estilizar a aplicação e fazer as logicas de edição dos clientes e produtos, fiz os componentes utilizados nas telas. E por ultimo mais não menos importante para incrementar o teste fiz a função de deletar clientes e produtos.

## Instruções
Se sua maquina ainda não tiver o VueJs instalado, basta abrir o CMD e execultar o seguinte comando:
```
npm install -g @vue/cli
```
Depois de ter feito o git clone do repositório, abra o teste no VS Code e no terminal (para abrir o terminal do VS Code: CTRL + ') execulte o seguinte comando:
```
npm install
```
Posteriormente, para rodar a aplicação basta execultar o seguinte comando:
```
npm run serve
```
Se no terminal aparecer a seguinte mensagem:
>Compiled successfully

Quer dizer que a aplicação está rodando perfeitamente :partying_face:

Agora é só acessar a URL: http://localhost:8080/

### Bibliotecas e Arquitetura
Para organizar o projeto, segui práticas com as quais já estou familiarizado, baseadas em minha experiência em outros projetos:

- **Estrutura de Diretórios:** Separei as telas na pasta **screens**, cada uma contendo os arquivos correspondentes às telas solicitadas. Como o teste envolvia mais de uma tela, utilizei o ***vue-router*** para o mapeamento das rotas, criando uma pasta **route** para definir os caminhos das telas e a configuração das rotas.
  
- **Componentização:** Os componentes que desenvolvi e utilizei nas telas foram organizados na pasta **components**, onde mantenho todos os componentes utilizados, são eles: **Data Table**, **Delete Modal**, **Header**, **Input Text**.
  
- **Gerenciamento de Estado:** Durante o desenvolvimento do teste, identifiquei a necessidade de um gerenciador de estado para a aplicação. Isso se deve ao fato de que precisava manter os dados dos clientes, produtos e associações enquanto a aplicação estivesse em execução, além de centralizar os métodos do **CRUD** dos dados e compartilhar esses dados entre as telas. Para isso, escolhi utilizar o ***Vuex***. Criei um arquivo chamado **store**, onde defini os estados (states) e os métodos que os alteram (mutations e actions). Isso proporcionou uma estrutura organizada e eficiente para o gerenciamento dos dados da aplicação.

### Funcionalidades
Aqui contém algumas instruções das funcionalidades da aplicação.

## Criação de clientes e produtos
Acredito que as funções de criação de clientes e produtos são bem intuitivas, então pularei essas instruções.

## Edição de clientes e produtos
Assim que é criado um cliente ou produto, é exibido uma tabela a baixo do formulário, onde ao clicar na linha da tabela é habilitado a função de edição do cliente ou produto, os campos do formulário são preenchidos com as informações do cliente ou produto e é possivel editar os mesmos.

## Exclusão de clientes e produtos
Para deletar um cliente ou produto, é bem semelhante a edição, onde ao clicar na linha da tabela é habilitado a função de exclusão do cliente ou produto, será exibido um botão 'Delete' no formulário e ao clicar nele será exibido um modal de confirmação onde se o usuário confirmar o operação é efetuada se não voltará ao fluxo normal do sistema.

## Criação e Edição de associações
Para criar uma associação existem dois caminhos, o primeiro é indo na tela de associação selecionando um cliente e selecionando os produtos que ele quer/pode ser associado. O segundo caminho é, na tabela de clientes é possivel notar um botão 'Associate', onde ao clicar nele o usuário é redirecionado para a tela de associação com o campo cliente preenchido de acordo com o cliente selecionado na tabela e a lista de produtos. Para editar a associação de um cliente a certo produto, é só fazer os mesmos caminhos da criação ao selecionar um cliente já irá aparecer os produtos que ele é associado pré selecionados.