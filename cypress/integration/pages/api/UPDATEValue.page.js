/// <reference types="Cypress"/> 
let urlBaseAPI = 'https://desafioonline.webmotors.com.br/api'
const payLoadValue = require('../../../fixtures/add-value.json')

function atualizarValor() {
    return cy.request({
        method: 'PUT',
        url: `${urlBaseAPI}/Values/0`,
        failOnStatusCode: false,
        body: payLoadValue
    }).as('Atualizar valor')
}

export { atualizarValor }