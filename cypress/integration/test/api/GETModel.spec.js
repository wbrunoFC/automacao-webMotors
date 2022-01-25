/// <reference types="Cypress"/> 
import * as GETModel from '../../pages/api/GETModel.page';

describe('GET Model', () => {
    it('Deve listar modelos de carros cadastrados', () => {
        GETModel.listarModelosVeiculos().should(res => {
            expect(res.status).to.eq(200)
            expect(res.body).to.have.length(3)
            expect(res.body[0].Name).to.eq('Agile')
        })
    });
});