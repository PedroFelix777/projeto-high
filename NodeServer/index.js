const express = require('express'); // Utilizando o express
const app = express(); // Função do expres dentro de uma variavel
const path = require('path'); //Utilizando a organização em pastas, caminhos 
const router = express.Router(); //Criando rotas

//Criando função da rota

app.use('/public', express.static('public'));

router.get('/', function(req, res){ 
    res.sendFile(path.join(__dirname + '/pages/index.html'));
    console.log(__dirname);
    console.log('index');
});

//Criando outra rota
router.get('/sobre', function(req,res){
    console.log("Sobre");
    res.sendFile(path.join(__dirname + '/pages/sobre.html'));
});

app.use('/', router);
app.listen(process.env.port || 3000);

console.log("O servidor está rodando")