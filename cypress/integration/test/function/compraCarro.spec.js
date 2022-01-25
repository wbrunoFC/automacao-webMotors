/// <reference types="Cypress"/> 
import * as ELEMENT from '../../pages/compraCarro.element';

describe('Campra de carros', () => {
    beforeEach(() => {
        cy.acessarAplicacao()
        ELEMENT.verOferta()
    })

    it('Deve listar carros disponíveis para compra - BDD #1', () => {
        ELEMENT.resultadoDeBusca().should('contain', '241.491')

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