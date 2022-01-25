/// <reference types="Cypress"/> 
import * as ELEMENT from '../../pages/compraMotos';
require('cypress-xpath')

describe('Comprar motos', () => {
    beforeEach(() => {
        cy.acessarAplicacao()
        ELEMENT.acessarMotos()
        ELEMENT.verOferta()
    })

    it('Deve listar motos disponíveis para compra - BDD #1', () => {
        ELEMENT.resultadoOferta().should('contain', '11.244')
    
    });

    it('Deve mostrar informações de financiamento de veículo - BDD #2', () => {
        ELEMENT.verificarFinanciamentoVeiculo()
        cy.get('.Forms__header__title-seller').should('contain', 'Veja as parcelas desse veículo')
    });

    it.only('Deve preencher informações para entrar em contato com o vendedor - BDD #3', () => {
        ELEMENT.verificarFinanciamentoVeiculo()
        ELEMENT.preencherNome()
        ELEMENT.preencherEmail()
        ELEMENT.preencherTelefone()
        ELEMENT.enviarMensagem()
        cy.get('.Banner__title > h2').should('contain', 'Mensagem enviada!')
    });
});