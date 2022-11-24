const express = require('express');

const morgan = require('morgan');
const routes = require('./routes/index.js');
const path = require('path')
require('./db.js');

const server = express();

server.set('port',3001 || process.env.PORT)
server.use(express.static(path.join(__dirname+'/public/build')))
server.use(express.urlencoded({extended:false}))
server.use(express.json());
server.use(morgan('dev'));


server.use('/', routes);
server.get('*',(req,res)=>{res.redirect('/')})




module.exports = server;
