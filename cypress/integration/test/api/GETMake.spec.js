/// <reference types="Cypress"/> 
import * as GETMake from '../../pages/api/GETMake.page';

describe('GET Make', () => {
    it('Deve recuperar as marcas cadastrada na webmotors', () => {
        GETMake.verificarTodasAsMarcas().should(res => {
            expect(res.status).to.eq(200)
            expect(res.body).to.have.length(3)
            expect(res.body[0].Name).to.eq('Chevrolet')
        })
    });
});