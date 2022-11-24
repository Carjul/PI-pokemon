const { Pokemon, Tipo } = require('../db');
 

const postData = async (req, res) => {

    try {
        var newtipo;
        const { name, ataque, defensa, velocidad, altura, peso, img, types } = req.body
 
        var pk = await Pokemon.findOne({ where: { name: `${name}` } });
        
        if (!pk) {
            var pokemon = await Pokemon.create(
                { name: name, ataque: ataque, defensa: defensa, velocidad: velocidad, altura: altura, peso: peso, img: img }
            )
        }

        types.map(async element => {
            const tipo = await Tipo.findOne({ where: { name: `${element.name}` } });

            if (!tipo && !pk) {
                newtipo = await Tipo.create({ name: element.name })
                pokemon.addTipo(newtipo)
            }
            if (tipo && !pk) {
                pokemon.addTipo(tipo)
            }
            if (!tipo && pk) {
                newtipo = await Tipo.create({ name: element.name })
                pk.addTipo(newtipo)
            }
        })

        res.status(201).json({ msg: "Recivido" })
    } catch (error) {
        console.log(error)
        res.status(404).json({ msg: "Error de envio" })
    }
}

module.exports = {
    postData
}