const axios = require('axios')


const getqueryname = async (req, res) => {
    try {
        const arr =[]

       var arr2 = [];
        const { name } = req.query

        await axios({
            method: 'get',
            url: `https://pokeapi.co/api/v2/pokemon/${name}`,

        }).then((response) => {
            for (let i = 0; i <response.data.types.length; i++) {
                const e= response.data.types[i].type;
                 arr2.push(e)
            }
            arr.push(response.data)
        })

    
    //   Guardarbusqueda({
    //     types: arr2,
    //     name: arr[0].name, 
    //     ataque: arr[0].stats[1].base_stat, 
    //     defensa: arr[0].stats[2].base_stat, 
    //     velocidad: arr[0].stats[5].base_stat,
    //     peso: arr[0].weight,
    //     altura:arr[0].height,
    //     img: arr[0].sprites.other.dream_world.front_default,
    //   })
        res.status(201).json(  {tipo: arr[0].types, pokemon: {
            id: arr[0].id,
            name: arr[0].name,
            ataque: arr[0].stats[1].base_stat,
            defensa: arr[0].stats[2].base_stat,
            velocidad: arr[0].stats[5].base_stat,
            peso: arr[0].weight,
            altura: arr[0].height,
            img: arr[0].sprites.other.dream_world.front_default
          }});
          
        

    } catch (error) {

        res.status(404).json({ msg: "no Found" })

    }
}

async function Guardarbusqueda(data) {
   await axios.post('http://localhost:3001/pokemons', data)
}
module.exports = { getqueryname };