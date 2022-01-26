/// <reference types="Cypress"/> 
import * as POSTValue from '../../pages/api/POSTValue.page';

describe('POST Valores', () => {
    it('Deve cadastrar valores', () => {
        POSTValue.cadastrarValor().should(res => {
            expect(res.status).to.eq(204)
        })
    })
});