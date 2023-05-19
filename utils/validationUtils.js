function isValidUsername(email) {
    // Logic for username validation goes here
    // Return true if the username is valid, otherwise false
    
    // Example validation: Username should be at least 4 characters long
    return email.length >= 4;
  }
  
  function isValidPassword(password) {
    // Logic for password validation goes here
    // Return true if the password is valid, otherwise false
    
    // Example validation: Password should be at least 6 characters long
    return password.length >= 6;
  }
  
  module.exports = { isValidUsername, isValidPassword };
  