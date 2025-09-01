primeira etapa: vamos na raiz do projeto para rodar o seguinte comando: npm i
após isso, ainda na raiz do projeto, vamos rodar o seguinte comando, para subir todo nosso ambiente de desenvolvimento: docker compose up
caso tenha algum problema com algum container ou imagem, rode um: docker compose down ou vai pelo app desktop e pare ou apague o container
pronto! a api já está rodando na seguinte url: http://localhost:3000

alguns detalhes, eu coloquei uma url base e especificando a versao. entao fica dessa forma: http://localhost:3000/api/v1

daqui em diante, a api está organizada em um módulo http e dentro as entidades relacionadas.
dentro de cada uma, ela tem as rotas especificas e os casos de uso.

para rodar as migrações rodo o seguinte comando: npm run migrate
será disparado um script que percorre todas migrações e executa, usando o client da lib pg

na seguinte url se encontra a parte do swagger, está incompleto.

acabaei não concluindo todo o processo.
oque ficou faltando foi: salvar as informações no banco de dados e utilizar dos conceitos de mensageria e alguns opcionais que eu gostaria de
ter feito, como testes, collection no postman, health check
