/// <reference types="Cypress"/> 
import * as UPDATEValue from '../../pages/api/UPDATEValue.page';
import * as GETValues from '../../pages/api/GETValues.page';

describe('UPDATE Valor', () => {
    it('Deve atualizar valor', () => {
        GETValues.listarValores().should(res => {
            UPDATEValue.atualizarValor().should(res => {
                expect(res.status).to.eq(200)
            })
        })
    })
});