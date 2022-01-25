/// <reference types="Cypress"/> 
let urlBaseAPI = 'https://desafioonline.webmotors.com.br/api/OnlineChallenge'

function listarDetalhesDeVeiculo() {
    return cy.request({
        method: 'GET',
        url: `${urlBaseAPI}/Vehicles?Page=1`,
        failOnStatusCode: false
    }).as('Listar detalhes de veiculo')
}

export { listarDetalhesDeVeiculo }