const fs = require("fs");
const path = require("path");

function getNotes() {
    let { notes } = JSON.parse(fs.readFileSync(
        path.join(__dirname, '../db/db.json'),
    ))
    return notes;
};

function createNote(body, notesArray) {
    const newNote = body;
    notesArray.push(newNote);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );

    return newNote;
};

function validateNote(note) {
    if (!note.title || typeof note.title !== 'string') {
        return false;
    }
    if (!note.text || typeof note.text !== 'string') {
        return false;
    }
    return true;
}

module.exports = {
    getNotes,
    createNote,
    validateNote
};