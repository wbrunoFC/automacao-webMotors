/// <reference types="Cypress"/> 
let urlBaseAPI = 'https://desafioonline.webmotors.com.br/api'

function listarValores() {
    return cy.request({
        method: 'GET',
        url: `${urlBaseAPI}/Values`,
        failOnStatusCode: false
    }).as('Listar valores')
}

export { listarValores }