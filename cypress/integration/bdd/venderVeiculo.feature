Feature: Comprar Veiculo

Como ususario
Desejo acesser o sistema 
Para comprar um veiculos

#1
Scenario Outline: Listar veiculos
Given eu esteja na tela princial do site
When eu clico no botao "VER OFERTAS"
Then eu devo ver a lista de veiculos disponiveis para compra

#2
Scenario Outline: Verificar as informacoes do veiculo
Given eu esteja na tela de listagem de veiculos
When eu clico no vepiculo de interesse
Then eu devo ser redirecionado para a tela de informacoes do veiculo

#3
Scenario Outline: Falar com o vendedor
Given eu esteja na tela de informacoes do veiculo
When eu preencher os <campos>
| campos   |
| E-mail   |
| Telefone |
| Mensagem |
And acionar o botão "Enviar Mensagem"
Then eu devo ser redirecionado para a tela de sucesso com <mensagem> de feedback
| mansagem          |
| Mensagem enviada! |