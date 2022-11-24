const axios = require('axios');
const { Pokemon, Tipo, Tipokemon } = require('../db');


const pokemons = async (req, res) => {
    try {
        const arr = []
        //data myapi
        const relacion = await Tipokemon.findAll()
        const ids = []

        for (let i = 0; i < relacion.length; i++) {
            const element = relacion[i].dataValues.pokemonId;
            if (!ids.includes(element)) {
                ids.push(element);
            }
        }

        for (let i = 0; i < ids.length; i++) {
            const element = ids[i];
            Buscardata(element).then((e) => {
                arr.push(e)
            })
        }

        //data apipoke
        await axios({
            method: 'get',
            url: 'https://pokeapi.co/api/v2/pokemon',

        }).then((response) => {
            response.data.results.map(e => arr.push(e))
        })
      
        res.status(201).json(arr)
        
    } catch (error) {
        res.status(404).json({ msg: "no encontrado" });
        console.log(error);
    }
}

async function Buscardata(id) {
    const rel = await Tipokemon.findAll({
        where: { pokemonId: `${id}` }
    })

    const array = []

    for (let i = 0; i < rel.length; i++) {
        const dta = await Tipo.findByPk(rel[i].dataValues.tipoId)
        array.push({type:dta.dataValues})

    }

    let poke = await Pokemon.findOne({
        where: { id: `${rel[0].dataValues.pokemonId}` }
    })

    return { tipo: array, pokemon: poke.dataValues }

}

module.exports = {
    pokemons
};