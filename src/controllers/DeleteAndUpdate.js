const { Pokemon } = require('../db');

const Update = async (req, res) => {
    try {
        const { id } = req.params
        const { name, ataque, defensa, velocidad, altura, peso, img } = req.body

        const data = await Pokemon.findByPk(id);

        data.name = name, data.ataque = ataque, data.defensa = defensa, data.velocidad = velocidad, data.altura = altura, data.peso = peso, data.img = img
        
        data.save();

        res.status(200).json({ msg: "pokemon actualizado" })
    } catch (error) {
        res.status(404).json({ msg: "pokemon no actualizado" })
    }
}
//--------------------------------------------------------------------------------------------//------------------
const Delete = (req, res) => {
    try {
        const { id } = req.params

        deltepokemon(id).then(() => {
            res.status(201).json({ msg: "pokemon eliminado" })
        }).catch((err) => {
            console.log(err)
            res.status(404).json({ msg: "Uup algo anda mal" })
        })

    } catch (error) {
        console.log(error)
        res.status(404).json({ msg: "pokemon no encontrado" })
    }
}
const deltepokemon = async (id) => {
    await Pokemon.destroy({
        where: { id: `${id}` }
    })
}
 


module.exports = {
    Update,
    Delete
}