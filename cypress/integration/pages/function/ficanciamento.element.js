var faker = require('faker-br');

function consultarVeiculo() {
    return cy.get('.col-xs-10 > .button').click() &&
           cy.get('[data-value="1"]').click() &&
           cy.get('.buttons > .button').click() &&
           cy.get('.vehicle-type-tabs__item--car > a').click() &&
           cy.get('[data-value="1"]').click().as('Particular')
}

function preencherInfomacoesVeiculo() {
    return cy.get('#idMarca').select('BMW').as('Marca') &&
           cy.get('#idModelo').select('116IA 1.6 TB 16V 136CV 5P').as('Modelo') &&
           cy.get('#idAno').select('2012 GASOLINA').as('Ano') &&
           cy.get('#valor-veiculo').type('15.000.0000').as('Valor do veiculo') &&
           cy.get('.button').click().as('Continuar')
}

function preencherDadosPessoais() {
    return cy.get(':nth-child(1) > .form__field > input').type(`${faker.internet.email()}`).as('Email') &&
           cy.get('.cell > .form__field > input').type('(61)99873-7777').as('Celular') &&
           cy.get(':nth-child(3) > .form__field > input').type('20/01/1990').as('Nascimento') &&
           cy.get(':nth-child(4) > .form__field > input').type(`${faker.br.cpf()}`).as('CPF') &&
           cy.get('#idEstado').select('Distrito Federal').as('Estado')
}

function consultarSimulacao() {
    return cy.get('.button').click().as('Ver simulação')
}

function resultadoSimulacao(params) {
    return cy.get('.simulation > .section__title', {timeout:40000})
}

export { consultarVeiculo,
         preencherInfomacoesVeiculo,
         preencherDadosPessoais,
         consultarSimulacao,
         resultadoSimulacao };