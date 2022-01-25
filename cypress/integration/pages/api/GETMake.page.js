/// <reference types="Cypress"/> 
let urlBaseAPI = 'https://desafioonline.webmotors.com.br/api/OnlineChallenge'

function verificarTodasAsMarcas() {
    return cy.request({
        method: 'GET',
        url: `${urlBaseAPI}/Make`,
        failOnStatusCode: false
    }).as('Listar todas as marcas')
}

export { verificarTodasAsMarcas };