const server = require('./src/app.js');
const { conn } = require('./src/db.js');
 

conn.sync({ force: false }).then(() => {
  server.listen(server.get('port'), () => {
    console.log(`listening at ${server.get('port')}`); // eslint-disable-line no-console
  });
})
.catch((err)=>{console.log(err)});
