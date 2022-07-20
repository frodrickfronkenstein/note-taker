const router = require('express').Router();
const fs = require('fs');
const savedNotes = require('../db/db.json');
const path = require("path");

router.get('/notes', (req, res) => {
    try {
        let notes = savedNotes;
        res.json(notes);
    } catch (error) {
        res.json({ msg: "couldn't load notes" });
    }
});



module.exports = router