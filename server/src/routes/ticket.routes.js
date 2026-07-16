const express = require('express');
const router = express.Router();
const { protect, requireRole } = require('../middleware/auth.middleware');
const { createTicket, getTickets, updateTicketStatus } = require('../controllers/ticket.controller');

/**
 * @openapi
 * /api/tickets:
 *   post:
 *     summary: Create a new ticket (Employee only)
 *     tags: [Tickets]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [title, description, priority]
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               priority:
 *                 type: string
 *                 enum: [Low, Medium, High]
 *     responses:
 *       201:
 *         description: Ticket created
 *       400:
 *         description: Validation error
 *       401:
 *         description: No/invalid token
 *       403:
 *         description: Forbidden — wrong role
 */
router.post('/', protect, requireRole('Employee'), createTicket);

/**
 * @openapi
 * /api/tickets:
 *   get:
 *     summary: Get tickets (Employees see own, Admins see all)
 *     tags: [Tickets]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of tickets
 *       401:
 *         description: No/invalid token
 */
router.get('/', protect, getTickets);

/**
 * @openapi
 * /api/tickets/{id}:
 *   put:
 *     summary: Update ticket status (Admin only)
 *     tags: [Tickets]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [status]
 *             properties:
 *               status:
 *                 type: string
 *                 enum: [Open, In Progress, Resolved]
 *     responses:
 *       200:
 *         description: Ticket updated
 *       400:
 *         description: Validation error
 *       401:
 *         description: No/invalid token
 *       403:
 *         description: Forbidden — wrong role
 *       404:
 *         description: Ticket not found
 */
router.put('/:id', protect, requireRole('Admin'), updateTicketStatus);

module.exports = router;