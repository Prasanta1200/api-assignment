const { isValidUsername, isValidPassword } = require('../utils/validationUtils');
const Ticket = require('../models/Ticket');

function generateTicket() {
  const ticket = [];
  
  // Logic for generating a Tambola ticket goes here
  // Modify the logic based on the given rules
  
  // Generate a 3x9 matrix for the ticket
  for (let i = 0; i < 3; i++) {
    const row = [];
    for (let j = 0; j < 9; j++) {
      // Generate a random number between the specified range
      const number = Math.floor(Math.random() * 10) + j * 10;
      row.push(number);
    }
    ticket.push(row);
  }
  
  return ticket;
}

function generateUniqueTicketId() {
  // Logic for generating a unique ticket ID goes here
  // You can use a UUID library or generate a unique ID based on your requirements
  // For simplicity, let's generate a random 6-digit number as the ticket ID
  return Math.floor(100000 + Math.random() * 900000).toString();
}

function saveTicket(ticket) {
  // Logic for saving the ticket and returning the unique ID goes here
  
  const ticketId = generateUniqueTicketId();
  
  // Save the ticket in the database or perform any required operations
  const newTicket = new Ticket({
    id: ticketId,
    numbers: ticket
  });
  newTicket.save();
  
  return ticketId;
}

function fetchTickets(page, limit) {
  // Logic for fetching the tickets based on pagination goes here
  
  const startIndex = (page - 1) * limit;
  
  // Fetch tickets from the database using the specified page and limit
  const tickets = Ticket.find()
    .skip(startIndex)
    .limit(limit)
    .exec();
    
  return tickets;
}

module.exports = { generateTicket, saveTicket, fetchTickets };
