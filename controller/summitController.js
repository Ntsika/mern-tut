const Summit = require('../models/summitModel');

// Create a new summit
exports.createSummit = async (req, res) => {
    try {
        const summit = new Summit(req.body);
        const savedSummit = await summit.save();
        res.status(201).json(savedSummit);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get all summits
exports.getAllSummits = async (req, res) => {
    try {
        const summits = await Summit.find();
        res.json(summits);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get a single summit by ID
exports.getSummitById = async (req, res) => {
    try {
        const summit = await Summit.findById(req.params.id);
        if (!summit) {
            return res.status(404).json({ error: 'Summit not found' });
        }
        res.json(summit);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update a summit by ID
exports.updateSummit = async (req, res) => {
    try {
        const summit = await Summit.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!summit) {
            return res.status(404).json({ error: 'Summit not found' });
        }
        res.json(summit);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete a summit by ID
exports.deleteSummit = async (req, res) => {
    try {
        const summit = await Summit.findByIdAndDelete(req.params.id);
        if (!summit) {
            return res.status(404).json({ error: 'Summit not found' });
        }
        res.json({ message: 'Summit deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};