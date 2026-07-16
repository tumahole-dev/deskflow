const express = require('express');
const router = express.Router();
const { protect, requireRole } = require('../middleware/auth.middleware');
const { createTicket, getTickets, updateTicketStatus } = require('../controllers/ticket.controller');

router.post('/', protect, requireRole('Employee'), createTicket);
router.get('/', protect, getTickets);
router.put('/:id', protect, requireRole('Admin'), updateTicketStatus);

module.exports = router;