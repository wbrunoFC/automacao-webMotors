/// <reference types="Cypress"/> 
import * as ELEMENT from '../../pages/function/venderVeiculos.element'

require('cypress-xpath')

describe('Vender veículos', () => {
    beforeEach(() => {
        cy.visit('/vender?lkid=1006')
        Cypress.on('uncaught:exception', (err, runnable) => {
            console.log(err);
            return false;
          })
    })

    it('Deve realizar cadastro de anuncio para venda de veículo', () => {
        ELEMENT.comecarAnuncio()
        ELEMENT.marcarCheckBox()
        ELEMENT.crieSuaConta()
        ELEMENT.crieUmaSenha()
        ELEMENT.codigoDeVerificacao()
        cy.log('ESTE PROCESSO SO PODE SER EXECUTADO UMA VEZ, COM USUARIOS DIFERENTES')
    
    });
});