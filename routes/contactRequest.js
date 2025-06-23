const express = require('express');
const contactRequestController = require('../controllers/contactRequestController');

const router = express.Router();

// Create a new contact request
router.post('/createContactRequest', contactRequestController.createContactRequest);

// Get all contact requests
router.get('/getAllContactRequest', contactRequestController.getAllContactRequests);

// Get a single contact request by ID
router.get('/getContactRequestById:id', contactRequestController.getContactRequestById);

// Update a contact request by ID
router.put('updateContactRequestById/:id', contactRequestController.updateContactRequest);

// Delete a contact request by ID
router.delete('/deleteContactRequestById:id', contactRequestController.deleteContactRequest);

module.exports = router;