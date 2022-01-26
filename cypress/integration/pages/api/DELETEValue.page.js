/// <reference types="Cypress"/> 
let urlBaseAPI = 'https://desafioonline.webmotors.com.br/api'

function apagarValor() {
    return cy.request({
        method: 'GET',
        url: `${urlBaseAPI}/Values/0`,
        failOnStatusCode: false
    }).as('Apagar valor')
}

export { apagarValor }