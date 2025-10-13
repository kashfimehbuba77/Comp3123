const NoteModel = require('../models/NotesModel.js');
const express = require('express');
const mongoose = require('mongoose');
const noteRoutes = express.Router();

//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
noteRoutes.post('/notes', async (req, res) => {
    const { noteTitle, noteDescription, priority } = req.body;

    // Validate request
    if (!noteTitle || !noteDescription) {
        return res.status(400).json({
            message: "Note title and description cannot be empty"
        });
    }

    try {
        const newNote = new NoteModel({ noteTitle, noteDescription, priority });
        const savedNote = await newNote.save();

        res.status(200).json({
            status: true,
            message: "New Note added successfully",
            data: savedNote
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        });
    }
});


//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find

noteRoutes.get('/notes', async (req, res) => {
    try {

        const notes = await NoteModel.find();

        if (notes.length === 0) {
            return res.status(200).json({
                status: true,
                message: "No notes found",
                data: []
            });
        }

        res.status(200).json({
            status: true,
            message: "Notes retrieved successfully",
            data: notes
        });

    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        });
    }
});


//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
noteRoutes.get('/notes/:noteId', async (req, res) => {
    const noteId = req.params.noteId;

    if (!mongoose.Types.ObjectId.isValid(noteId)) {
        return res.status(400).json({
            status: false,
            message: "Invalid Note ID"
        });
    }

    try {
        const note = await NoteModel.findById(noteId);

        if (!note) {
            return res.status(404).json({
                status: false,
                message: `Note not found for id: ${noteId}`
            });
        }

        res.status(200).json({
            status: true,
            message: `Note fetched successfully for id: ${noteId}`,
            data: note
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        });
    }
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
noteRoutes.put('/notes/:noteId', async (req, res) => {
    const noteId = req.params.noteId;
    const { noteTitle, noteDescription, priority } = req.body;

    if (!noteTitle || !noteDescription) {
        return res.status(400).json({
            status: false,
            message: "Note title and description cannot be empty"
        });
    }

    if (!mongoose.Types.ObjectId.isValid(noteId)) {
        return res.status(400).json({
            status: false,
            message: "Invalid Note ID"
        });
    }

    try {
        const updatedNote = await NoteModel.findByIdAndUpdate(
            noteId,
            { noteTitle, noteDescription, priority },
            { new: true, runValidators: true }
        );

        if (!updatedNote) {
            return res.status(404).json({
                status: false,
                message: `Note not found for id: ${noteId}`
            });
        }

        res.status(200).json({
            status: true,
            message: `Note updated successfully for id: ${noteId}`,
            data: updatedNote
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        });
    }
});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
noteRoutes.delete('/notes/:noteId', async (req, res) => {
    const noteId = req.params.noteId;

    if (!mongoose.Types.ObjectId.isValid(noteId)) {
        return res.status(400).json({
            status: false,
            message: "Invalid Note ID"
        });
    }

    try {
        const deletedNote = await NoteModel.findByIdAndDelete(noteId);

        if (!deletedNote) {
            return res.status(404).json({
                status: false,
                message: `Note not found for id: ${noteId}`
            });
        }

        res.status(200).json({
            status: true,
            message: `Note deleted successfully for id: ${noteId}`,
            data: deletedNote
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        });
    }
});


module.exports = noteRoutes;
