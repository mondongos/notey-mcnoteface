const router = require('express').Router()
let Note = require('../models/note.model')

router.route('/').get((req, res) => {
    Note.find()
    .then(notes => res.json(notes))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
    const username = req.body.username
    const title = req.body.title
    const textbody = req.body.textbody
    const newNote = new Note({
        username,
        title,
        textbody    
    })

    newNote.save()
    .then(() => res.json('Note added'))
    .catch(err => res.status(400).json('Error: ' + err))
}) 

module.exports = router