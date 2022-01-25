var faker = require('faker-br');

function acessarMotos() {
    return cy.get('.NavBar--tabs > :nth-child(2) > a').click();
}

function verOferta() {
    return cy.get('.NavBar__searchbar > .Button').click();
}

function verificarFinanciamentoVeiculo() {
    return cy.get(':nth-child(1) > .sc-cJSrbW > .sc-jnlKLf > .sc-dfVpRl').invoke('removeAttr', 'target').click()
}

function resultadoOferta() {
    return cy.get('.sc-hzDkRC')
}

function preencherNome() {
    return cy.get('.Forms__cookie__stage > .Form__field--name > input', {timeout:10000}).type(`${faker.name.firstName()}`)
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

export { acessarMotos,
         verOferta,
         verificarFinanciamentoVeiculo,
         resultadoOferta,
         preencherNome,
         preencherEmail,
         preencherTelefone,
         enviarMensagem };