const axios = require('axios')
const { Tipo } = require('../db')
const tipos = async (req, res) => {
try {
    const arr = []
    const tope= await Tipo.findAll();
 
  if(tope.length<20){
    await axios({
        method: 'get',
        url: 'https://pokeapi.co/api/v2/type',

    }).then((response) => {
        response.data.results.map(e => arr.push({ name: e.name }))
    })
  }

    for (let i = 0; i < arr.length; i++) {
        
        const x = await Tipo.create({
            name: arr[i].name
        })
    }
    const getall= await Tipo.findAll();
    res.status(201).json(getall)   
} catch (error) {
    res.status(404).json({msg:"no Found"})
   console.log(error) 
}
}

module.exports = {
    tipos
};