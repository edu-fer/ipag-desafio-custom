voce precisar ter o docker instalado

depois nos vamos na raiz do projeto para rodar o seguinte comando: npm i
após isso, ainda na raiz do projeto, vamos rodar o seguinte comando, para subir todo nosso ambiente de desenvolvimento: docker compose up
caso tenha algum problema com algum container ou imagem, rode um: docker compose down ou vai pelo app desktop e pare ou apague o container
pronto! a api já está rodando na seguinte url: http://localhost:3000

a partir daqui é só abrir o postman ou outro software de requisições da sua preferencia e começar a testar!

alguns detalhes, eu coloquei uma url base e especificando a versao. entao fica dessa forma: http://localhost:3000/api/v1

daqui em diante, a api está organizada em um módulo http e dentro as entidades relacionadas.
dentro de cada uma, ela tem as rotas especificas e os casos de uso.

aqui está uma detalhamento para o fácil acesso aos endpoints:

POST /orders -> cria um pedido
