/// <reference types="Cypress"/> 
let urlBaseAPI = 'https://desafioonline.webmotors.com.br/api'
const payLoadValue = require('../../../fixtures/add-value.json')

function cadastrarValor() {
    return cy.request({
        method: 'POST',
        url: `${urlBaseAPI}/Values`,
        failOnStatusCode: false,
        body: payLoadValue
    }).as('Cadastrar valor')
}

export { cadastrarValor }