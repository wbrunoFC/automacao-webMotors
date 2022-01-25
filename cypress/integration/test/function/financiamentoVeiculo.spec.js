/// <reference types="Cypress"/> 

describe('Financiamento', () => {
    beforeEach(() => {
        cy.visit('/financiamento?lkid=1011')
        Cypress.on('uncaught:exception', (err, runnable) => {
            console.log(err);
            return false;
          })
    })

    it('Deve realizar consulta de financiamento/ simulação', () => {
        cy.get('.col-xs-10 > .button').click()
        cy.get('[data-value="1"]').click()
        cy.get('.buttons > .button').click()
        cy.get('.vehicle-type-tabs__item--car > a').click()
        cy.get('[data-value="1"]').click().as('Particular')
        cy.get('#idMarca').select('BMW').as('Marca')
        cy.get('#idModelo').select('116IA 1.6 TB 16V 136CV 5P').as('Modelo')
        cy.get('#idAno').select('2012 GASOLINA').as('Ano')
        cy.get('#valor-veiculo').type('15.000.0000').as('Valor do veiculo')
        cy.get('.button').click().as('Continuar')

        cy.get(':nth-child(1) > .form__field > input').type('wbruno.costa@gmail.com').as('Email')
        cy.get('.cell > .form__field > input').type('(61)99873-7647').as('Celular')
        cy.get(':nth-child(3) > .form__field > input').type('25/07/1996').as('Nascimento')
        cy.get(':nth-child(4) > .form__field > input').type('053.220.891-95').as('CPF')
        cy.get('#idEstado').select('Distrito Federal').as('Estado')
        cy.get('.button').click().as('Ver simulação')
        cy.get('.simulation > .section__title', {timeout:15000}).should('contain', 'Resultado da sua simulação')
    });
});