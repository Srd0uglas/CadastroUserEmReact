// Importa uma biblioteca que instalei
import express, { response } from 'express'


// pegando o express e transformando numa função
const app = express()


app.get('/usuarios', (request, response) => {
    response.send('Ok, deu bom!')
})

// qual porta do computador irá rodar
app.listen(3000)



// criar usuários
const users = []
app.post('/usuarios', (request, response) => {
    console.log(request)
    response.send('Ok, post')
})