const ContactRequest = require('../models/contactRequest');

// Create a new contact request
exports.createContactRequest = async (req, res) => {
    try {
        const contactRequest = new ContactRequest(req.body);
        await contactRequest.save();
        res.status(201).json(contactRequest);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get all contact requests
exports.getAllContactRequests = async (req, res) => {
    try {
        const contactRequests = await ContactRequest.find();
        res.json(contactRequests);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get a single contact request by ID
exports.getContactRequestById = async (req, res) => {
    try {
        const contactRequest = await ContactRequest.findById(req.params.id);
        if (!contactRequest) {
            return res.status(404).json({ error: 'Contact request not found' });
        }
        res.json(contactRequest);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update a contact request by ID
exports.updateContactRequest = async (req, res) => {
    try {
        const contactRequest = await ContactRequest.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!contactRequest) {
            return res.status(404).json({ error: 'Contact request not found' });
        }
        res.json(contactRequest);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete a contact request by ID
exports.deleteContactRequest = async (req, res) => {
    try {
        const contactRequest = await ContactRequest.findByIdAndDelete(req.params.id);
        if (!contactRequest) {
            return res.status(404).json({ error: 'Contact request not found' });
        }
        res.json({ message: 'Contact request deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};