Feature: Financiamento de Veículos

Como usuário
Desejo consultar a aplicação 
Para saber o valor do financiamento de um veículo

#1
Scenario Outline: Simulação de um financiamento
Given que eu esteja na tela de financiamento de veículos
When eu preencher os <camposVeiculo>
And <camposPessoais>
And eu clicar em "Ver simulação"
Then eu devo ver o valor do financiamento e demais informações
Examples:
    | camposVeiculo     | camposPessoais |
    | Marca             | Email          |
    | Modelo            | Celular        |
    | Ano               | CPF            |
    | Valor do veículo  | UF             |
