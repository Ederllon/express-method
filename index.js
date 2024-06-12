const express = require('express');
const server = express();
server.listen(808);
server.get('/',function(req,res){res.send('Online')})
console.log('Online')


