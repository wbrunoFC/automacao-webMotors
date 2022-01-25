/// <reference types="Cypress"/> 
let urlBaseAPI = 'https://desafioonline.webmotors.com.br/api/OnlineChallenge'

function listarModelosVeiculos() {
    return cy.request({
        method: 'GET',
        url: `${urlBaseAPI}/Model?MakeID=1`,
        failOnStatusCode: false
    }).as('Listar todos os modelos de veiculos')
}

export { listarModelosVeiculos };