/// <reference types="Cypress"/> 
import * as ELEMENT from '../../pages/ficanciamento.element';

describe('Financiamento', () => {
    beforeEach(() => {
        cy.visit('/financiamento?lkid=1011')
        Cypress.on('uncaught:exception', (err, runnable) => {
            console.log(err);
            return false;
          })
    })

    it('Deve realizar consulta de financiamento/ simulação - BDD #1', () => {
        ELEMENT.consultarVeiculo()
        ELEMENT.preencherInfomacoesVeiculo()
        ELEMENT.preencherDadosPessoais()
        ELEMENT.consultarSimulacao()
        ELEMENT.resultadoSimulacao().should('contain', 'Resultado da sua simulação')
    });
});