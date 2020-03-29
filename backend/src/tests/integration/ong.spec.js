const request = require('supertest');
const app = require('../../app');

describe('ONG', () => {
    it('should  be able to create a new ONG', () => {
        const response = request(app).post('/ongs').send({
            name: "APAD2",
            email: "contato",
            whatsapp: "470000000",
            city: "Rio do Sul",
            uf: "SP"
        });
    })
})