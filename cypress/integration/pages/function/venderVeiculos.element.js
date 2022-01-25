var faker = require('faker-br');

function comecarAnuncio() {
    return cy.get('.css-bchk6h-CssButton-CssButton-Button').click()
}

function marcarCheckBox() {
    return cy.get('.css-owjzbv-CheckboxWrapper-CheckboxWrapper > :nth-child(1)').click() &&
           cy.get('.css-owjzbv-CheckboxWrapper-CheckboxWrapper > :nth-child(2)').click() &&
           cy.xpath('//*[@id="app"]/div/div[12]/div[1]/div[3]/button[2]').click()
}

function crieSuaConta() {
    return cy.get('.css-1ovzz7p > button').click().as('Crie sua conta') &&
           cy.get('#name').type(`${faker.name.firstName()} ${faker.name.lastName()}`).as('Nome completo') &&
           cy.get('#email').type(`${faker.internet.email()}`).as('Email') &&
           cy.get('.css-o9qr69-Container-Container').click().as('Criar conta')
}

function crieUmaSenha() {
    return cy.get('#password').type('Web@2022').as('Criar senha') &&
           cy.get('#confirmPassword').type('Web@2022').as('Confirmar senha') &&
           cy.get('.css-1mujkfh').click().as('Criar conta com senha nova')
}

function codigoDeVerificacao() {
    return    cy.get('.ReactInputVerificationCode__container > :nth-child(2)', {timeout:8000}).type(4) &&
              cy.get('#one-time-code').type(8) &&
              cy.get('#one-time-code').type(5) &&
              cy.get('.ReactInputVerificationCode__container > :nth-child(5)').type(7) &&
              cy.get('.ReactInputVerificationCode__container > :nth-child(6)').type(5) &&
              cy.get('.ReactInputVerificationCode__container > :nth-child(7)').type(5) 
}
export { comecarAnuncio,
         marcarCheckBox,
         crieSuaConta,
         crieUmaSenha,
         codigoDeVerificacao };