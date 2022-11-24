const { Router } = require('express');
const router = Router();

// Importar todos los routers;

const {tipos}=  require('../controllers/types')
const {pokemons}=  require('../controllers/getpokeApi')
const {getqueryname}=  require('../controllers/getquery')
const {postData}=  require('../controllers/postpokemon')
const {pokemonid}=  require('../controllers/getid')
const {Delete, Update}=  require('../controllers/DeleteAndUpdate')


// Configurar los routers


router.get('/pokemons',pokemons)
router.get('/pokemon',getqueryname )//http://localhost:3001/pokemons?name=ditto
router.get('/types',tipos)
router.get('/pokemons/:id', pokemonid)
router.post('/pokemons',postData)
router.put('/pokemons/:id', Update) 
router.delete('/pokemons/:id', Delete)


module.exports = router;
