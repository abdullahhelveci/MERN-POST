const mongoose = require('mongoose')

const database = () => {

        mongoose.connect('mongodb://localhost:27017/denemeMern').then(() => {
            console.log('mongoDB connected..')
        }).catch((err) => {
            console.log(err)
        })
}

module.exports = database