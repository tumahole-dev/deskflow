const Ticket = require('../models/Ticket');

// POST /api/tickets — Employee creates a ticket
const createTicket = async (req, res, next) => {
  try {
    const { title, description, priority } = req.body;

    if (!title || !description || !priority) {
      return res.status(400).json({ message: 'title, description, and priority are required' });
    }

    if (!['Low', 'Medium', 'High'].includes(priority)) {
      return res.status(400).json({ message: 'priority must be Low, Medium, or High' });
    }

    const ticket = await Ticket.create({
      title,
      description,
      priority,
      createdBy: req.user.id,
    });

    res.status(201).json(ticket);
  } catch (err) {
    next(err);
  }
};

// GET /api/tickets — Employees see own tickets, Admins see all
const getTickets = async (req, res, next) => {
  try {
    let tickets;
    if (req.user.role === 'Admin') {
      tickets = await Ticket.find().populate('createdBy', 'name email');
    } else {
      tickets = await Ticket.find({ createdBy: req.user.id });
    }
    res.status(200).json(tickets);
  } catch (err) {
    next(err);
  }
};

// PUT /api/tickets/:id — Admin updates status
const updateTicketStatus = async (req, res, next) => {
  try {
    const { status } = req.body;

    if (!status) {
      return res.status(400).json({ message: 'status is required' });
    }

    if (!['Open', 'In Progress', 'Resolved'].includes(status)) {
      return res.status(400).json({ message: 'status must be Open, In Progress, or Resolved' });
    }

    const ticket = await Ticket.findById(req.params.id);

    if (!ticket) {
      return res.status(404).json({ message: 'Ticket not found' });
    }

    ticket.status = status;
    await ticket.save();

    res.status(200).json(ticket);
  } catch (err) {
    next(err);
  }
};

module.exports = { createTicket, getTickets, updateTicketStatus };