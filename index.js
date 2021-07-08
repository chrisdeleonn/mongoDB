const mongoose = require('mongoose')

mongoose
.connect('mongodb+srv://root:root123@cluster0.up5z2.mongodb.net/test', { useNewUrlParser: true})
.then(() => console.log('we are connected Houston...'))
.catch(err => console.log('you have an error buddy, fix it...', err))

