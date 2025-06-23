const Speaker = require('../models/Speaker');

// Create a new speaker
exports.createSpeaker = async (req, res) => {
    try {
        const speaker = new Speaker(req.body);
        await speaker.save();
        res.status(201).json(speaker);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get all speakers
exports.getAllSpeakers = async (req, res) => {
    try {
        const speakers = await Speaker.find();
        res.json(speakers);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get a single speaker by ID
exports.getSpeakerById = async (req, res) => {
    try {
        const speaker = await Speaker.findById(req.params.id);
        if (!speaker) {
            return res.status(404).json({ error: 'Speaker not found' });
        }
        res.json(speaker);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update a speaker by ID
exports.updateSpeaker = async (req, res) => {
    try {
        const speaker = await Speaker.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!speaker) {
            return res.status(404).json({ error: 'Speaker not found' });
        }
        res.json(speaker);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete a speaker by ID
exports.deleteSpeaker = async (req, res) => {
    try {
        const speaker = await Speaker.findByIdAndDelete(req.params.id);
        if (!speaker) {
            return res.status(404).json({ error: 'Speaker not found' });
        }
        res.json({ message: 'Speaker deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};