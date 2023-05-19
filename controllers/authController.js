
const authService = require('../services/authService');

async function register(req, res) {
  try {
    // Get email and password from the request body
    const { email, password } = req.body;
   

    // Register the user
    await authService.register(email, password);
   

    res.status(201).json({ message: 'Registration successful' });
  } catch (error) {
    res.status(400).json({ error: 'Registration failed' });
  }
}

async function login(req, res) {
  try {
    // Get email and password from the request body
    const { email, password } = req.body;

    // Authenticate the user
    const token = await authService.login(email, password);

    if (token) {
      // Return the token in the response
      res.json({ token });
    } else {
      // Return an error if authentication fails
      res.status(401).json({ error: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = { register, login };
