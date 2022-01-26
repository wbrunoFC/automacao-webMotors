/// <reference types="Cypress"/> 
import * as GETValues from '../../pages/api/GETValues.page';

describe('GET Valores', () => {
    it('Deve listar valores', () => {
        GETValues.listarValores().should(res => {
            expect(res.status).to.eq(200)
            expect(res.body).to.have.length(2)
            expect(res.body[0]).to.eq('value1')
        })
    })
});