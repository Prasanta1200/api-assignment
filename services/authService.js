const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = 'prasanta';

 function register(email, password) {
 // Generate a salt and hash the password
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  // Create a new/ user
  const user = new User({
    email,
    password: hash
  });

    

  // Save the user in the database
  try {
    user.save();
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}


async function login(email, password) {
    try {
      // Find the user by email
      const user = await User.findOne({ email });
  
      if (!user) {
        throw new Error('Invalid email or password');
      }
  
      // Compare the provided password with the hashed password
      const isMatch = await bcrypt.compare(password, user.password);
  
      if (!isMatch) {
        throw new Error('Invalid email or password');
      }
  
      // Passwords match, generate a JWT token
      const token = jwt.sign({ userId: user._id }, secret, { expiresIn: '1h' });
      console.log(token);
  
      // Return the token
      return token;
    } catch (error) {
      throw error;
    }
  }
  

module.exports = { register, login };
