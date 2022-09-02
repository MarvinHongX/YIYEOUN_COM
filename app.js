const express = require('express')
const app = express()
const ejs = require('ejs')
const path = require('path')
const bodyParser = require('body-parser')
const compression = require('compression')
const router = require('./routes')
const helmet = require('helmet')



app.use(helmet())
app.use(express.static(path.join(__dirname,'public')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use(compression())
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))


app.use('/', router)

const server = app.listen(app.get('port'), () => {
    console.log('Listening', app.get('port'), 'port for request')
})

module.exports = app

