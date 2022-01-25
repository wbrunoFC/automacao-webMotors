/// <reference types="Cypress"/> 
let urlBaseAPI = 'https://desafioonline.webmotors.com.br/api/OnlineChallenge'

function listarVersoes() {
    return cy.request({
        method: 'GET',
        url: `${urlBaseAPI}/Version?ModelID=1`,
        failOnStatusCode: false
    }).as('Listar versoes de carro')
}

export { listarVersoes }