const express = require('express');

const tambolaController = require('../controllers/tambolaController');

const router = express.Router();

router.post('/ticket', tambolaController.createTicket);
router.get('/tickets', tambolaController.fetchTickets);

module.exports = router;
