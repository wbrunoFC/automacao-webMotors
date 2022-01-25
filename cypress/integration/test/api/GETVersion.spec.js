/// <reference types="Cypress"/> 
import * as GETModel from '../../pages/api/GETVersion.page';

describe('GET Model', () => {
    it('Deve listar versoes de vaiculos', () => {
        GETModel.listarVersoes().should(res => {
            expect(res.status).to.eq(200)
            expect(res.body).to.be.not.null
            expect(res.body[0].Name).to.eq('1.5 DX 16V FLEX 4P AUTOMÁTICO')
        })
    });
});