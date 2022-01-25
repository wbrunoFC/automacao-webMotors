/// <reference types="Cypress"/> 
import * as GETModel from '../../pages/api/GETVehicles.page';

describe('GET Vehicles', () => {
    it('Deve listar detalhes de veiculos cadastrados', () => {
        GETModel.listarDetalhesDeVeiculo().should(res => {
            expect(res.status).to.eq(200)
            expect(res.body).to.have.length(10)
            expect(res.body[0].Color).to.eq('Azul')
        })
    });
});