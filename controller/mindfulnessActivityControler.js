const MindfulnessActivity = require('../models/mindfulnessActivity');

// Create a new mindfulness activity
exports.createActivity = async (req, res) => {
    try {
        const activity = new MindfulnessActivity(req.body);
        await activity.save();
        res.status(201).json(activity);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get all mindfulness activities
exports.getAllActivities = async (req, res) => {
    try {
        const activities = await MindfulnessActivity.find();
        res.json(activities);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get a single mindfulness activity by ID
exports.getActivityById = async (req, res) => {
    try {
        const activity = await MindfulnessActivity.findById(req.params.id);
        if (!activity) {
            return res.status(404).json({ error: 'Activity not found' });
        }
        res.json(activity);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update a mindfulness activity by ID
exports.updateActivity = async (req, res) => {
    try {
        const activity = await MindfulnessActivity.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!activity) {
            return res.status(404).json({ error: 'Activity not found' });
        }
        res.json(activity);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete a mindfulness activity by ID
exports.deleteActivity = async (req, res) => {
    try {
        const activity = await MindfulnessActivity.findByIdAndDelete(req.params.id);
        if (!activity) {
            return res.status(404).json({ error: 'Activity not found' });
        }
        res.json({ message: 'Activity deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};