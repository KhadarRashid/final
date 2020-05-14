let express = require('express')
let db = require('../models')
let Sequelize = require('sequelize')
let Client = db.Client

var router = express.Router() 

// This part handles the posting of the clients and has error handling in case something goes awry
router.post('/clients', function(req, res, next){
    Client.create( req.body ).then( (data) => {
        return res.status(201).send('success')
    }).catch( err => {
        if (err instanceof Sequelize.ValidationError) {
            let messages = err.errors.map (e=>e.message)
            return res.status(400).json(messages)
        }
        return next(err)
    })
})


module.exports = router