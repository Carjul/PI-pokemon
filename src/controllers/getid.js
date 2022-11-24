const { Pokemon, Tipo, Tipokemon } = require('../db');
const axios = require('axios');


const pokemonid = async (req, res) => { 
    try {
        const { id } = req.params;

        if (id.length < 10) {
            var arr = [];
            await axios({
                method: 'get',
                url: `https://pokeapi.co/api/v2/pokemon/${id}`,

            }).then((response) => {
                arr.push(response.data)
            });

            res.status(201).json({
                tipo: arr[0].types, pokemon: {
                    id: arr[0].id,
                    name: arr[0].name,
                    ataque: arr[0].stats[1].base_stat,
                    defensa: arr[0].stats[2].base_stat,
                    velocidad: arr[0].stats[5].base_stat,
                    peso: arr[0].weight,
                    altura: arr[0].height,
                    img: arr[0].sprites.other.dream_world.front_default
                }
            });
        } else {
            const relacion = await Tipokemon.findAll({
                where: { pokemonId: `${id}` }
            })


            Buscardata(relacion).then((e) => {
                res.status(201).json(e);
            }).catch((err) => {
                console.log(err)
                res.status(404).json({ msg: "Uup algo anda mal" })
            })
        }


    } catch (error) {
        res.status(404).json({ msg: "id no encontrado" });
        console.log(error);
    }
}

async function Buscardata(rel) {
    const array = []

    for (let i = 0; i < rel.length; i++) {
        const dta = await Tipo.findByPk(rel[i].dataValues.tipoId)
        array.push(dta)

    }

    let poke = await Pokemon.findOne({
        where: { id: `${rel[0].dataValues.pokemonId}` }
    })

    return { tipo: array, pokemon: poke.dataValues }

}

module.exports = {
    pokemonid
}