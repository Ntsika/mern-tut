const express = require('express');
const contactRequestController = require('../controllers/contactRequest');

const router = express.Router();

// Create a new contact request
router.post('/', contactRequestController.createContactRequest);

// Get all contact requests
router.get('/', contactRequestController.getAllContactRequests);

// Get a single contact request by ID
router.get('/:id', contactRequestController.getContactRequestById);

// Update a contact request by ID
router.put('/:id', contactRequestController.updateContactRequest);

// Delete a contact request by ID
router.delete('/:id', contactRequestController.deleteContactRequest);

module.exports = router;