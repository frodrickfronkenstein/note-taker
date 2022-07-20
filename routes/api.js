const router = require('express').Router();
const {getNotes, createNote, validateNote} = require('../lib/notes');
const { v4: uuidv4 } =require('uuid');

router.get('/notes', (req, res) => {
    let results = getNotes();
    res.json(results);
});

router.post('/notes', (req, res) => {
    req.body.id = uuidv4();

    if (!validateNote(req.body)) {
        res.status(400).send('poor formatting')
    }
    else {
        const note = createNote(req.body, notes);

        res.json(note);
    }
});

module.exports = router