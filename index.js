const express =require('express')
const app = express()
var cors = require('cors')

app.use(express.json())

app.use(cors())

app.listen(3000,()=>{
    console.log('conectado en el puerto 3000')
})


app.get('/',(req,res)=>{
    res.send('bienvenido')
})







