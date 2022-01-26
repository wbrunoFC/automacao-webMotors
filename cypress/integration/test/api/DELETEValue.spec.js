/// <reference types="Cypress"/> 
import * as DELETEValue from '../../pages/api/DELETEValue.page';

describe('DELETE Valor', () => {
    it('Deve apagar valor', () => {
        DELETEValue.apagarValor().should(res => {
            expect(res.status).to.eq(200)
        })
    })
});