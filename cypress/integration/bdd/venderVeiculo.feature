Feature: Vender veiculo

Como ususario
Desejo acesar o sistema, cadastrar um veiculo
Para anunciar uma venda

Scenario Outline: Anuncio de veiculo
Given que eu estou logado no sistema
And eu esteja na tela de anuncio de veiculo
When eu criar uma conta ou logar no sistema
And preencher os dados das <etapas>
Then o sistema deve apresentar o anuncio criado
Examples:
    | etapas      |
    | Veiculo     |
    | Sobre Voce  |
    | Finalizar   |
