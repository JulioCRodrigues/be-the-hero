const generateUniqueId = require('../utils/generateUniqueId');
const connection = require('../database/connection');
const crypto = require('crypto');


module.exports = {

    async index (request, response){
        const ongs = await connection('ongs').select('*'); //listar as ongs cadstradas 
    
    return response.json(ongs);
    },
    
    async create(request, response){
        const {name, email, whatsapp, city, uf} = request.body;

        const id = crypto.randomBytes(4).toString('HEX'); //criar id para as ongs cadastradas
    
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        return response.json({  id  });
    }
};