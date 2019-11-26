const router = require('express').Router()
let Note = require('../models/note.model')

router.route('/').get((req, res) => {
    Note.find()
    .then(notes => res.json(notes))
    .catch(err => res.status(400).json('Error: ' + err))
})

// Create
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

// Read
router.route('/:id').get((req, res) => {
    Note.findById(req.params.id)
    .then(note => res.json(note))
    .catch(err => res.status(400).json('Error: ', + err))
})

// Update
router.route('/update/:id').post((req, res) => {
    Note.findById(req.params.id)
    .then(note => {
        note.username = req.body.username, 
        note.title = req.body.title,
        note.textbody = req.body.textbody
        note.save()
        .then(() => res.json('Note updated'))
        .catch(err => res.status(400).json('Error' + err))
    })
})

// Delete
router.route('/:id').delete((req, res) => {
    Note.findByIdAndDelete(req.params.id)
    .then(() => res.json('Note Deleted'))
    .catch(err => res.status(400).json('Error: ' + err)) 
})

module.exports = router