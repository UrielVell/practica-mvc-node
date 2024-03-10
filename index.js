const express = require('express')
const dotenv = require('dotenv')
const app = express()

dotenv.config()

app.set('view engine', 'ejs')

// app.get('/', (req, res) => {
//     res.send("Hola Mundo con nodemon")
// })

// app.listen(process.env.SERVER_PORT, () => {
//     console.log(`Aplicacion de ejemplo escuchando en el puerto ${process.env.SERVER_PORT}`)
// })

const homeRouter = require('./routes/home')
app.use("/", homeRouter)
app.use("/home", homeRouter)

const errorHandler = require('./middlewares/errorhandler')
app.use(errorHandler)

app.listen(process.env.SERVER_PORT, () => {
        console.log(`Aplicacion de ejemplo escuchando en el puerto ${process.env.SERVER_PORT}`)
    })