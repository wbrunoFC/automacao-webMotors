var faker = require('faker-br');

function pesquisar(nomeCarro) {
    return cy.get('#searchBar').type(nomeCarro)
}

function resultadoDePesquisa(){
    return cy.get('.SearchBar__results__result__name').click()
}

function verOferta() {
    return cy.get('.NavBar__searchbar > .Button').click()
}

function resultadoDeBusca() {
    return cy.get('.sc-bRBYWo')
}

function verificarFinanciamentoVeiculo() {
    return cy.get(':nth-child(1) > .sc-cJSrbW > .sc-jnlKLf > .sc-dfVpRl')
                .invoke('removeAttr', 'target').click()
}

function preencherNome() {
    return cy.get('.Forms__cookie__stage > .Form__field--name > input').type(`${faker.name.firstName()}`)
}
function preencherEmail() {
    return cy.get('.Forms__cookie__stage > .Form__field--email > input').type(`${faker.name.firstName()}${faker.internet.email()}`)
}
function preencherTelefone() {
    return cy.get('.Forms__cookie__stage > .Form__field--phone > input').type('(61) 99999-9999')
}
// function preencherMensagem() {}
function enviarMensagem() {
    return cy.get('.Forms__vehicleSendProposal__container__info-form > #ButtonSendProposal').click()
}

export { pesquisar,
         resultadoDePesquisa,
         resultadoDeBusca,
         verOferta,
         verificarFinanciamentoVeiculo,
         preencherNome,
         preencherEmail,
         preencherTelefone,
         enviarMensagem };