const tambolaService = require('../services/tambolaService');

function createTicket(req, res) {
  // Generate a Tambola ticket
  const ticket = tambolaService.generateTicket();

  // Save the ticket and get the unique ID
  const ticketId = tambolaService.saveTicket(ticket);

  // Return the unique ID in the response
  res.json({ ticketId });
}

function fetchTickets(req, res) {
  // Get the page number and limit from the query parameters
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  // Fetch the tickets based on the page and limit
  const tickets = tambolaService.fetchTickets(page, limit);

  // Return the fetched tickets in the response
  res.json({ tickets });
}

module.exports = { createTicket, fetchTickets };
