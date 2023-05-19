const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const tambolaRoutes = require('./routes/tambolaRoutes');

dotenv.config();

const app = express();
const DB = "mongodb+srv://Prasanta:Prasanta@cluster0.z4m8koz.mongodb.net/?retryWrites=true&w=majority";
if (!DB) {
    console.error("DB_CONNECTION_STRING environment variable is not set");
    process.exit(1);
}
mongoose.connect(DB).then(() => {
    console.log("Connection Success");
}).catch((err) => {
    console.log(err.message);
})

// Middleware
app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/tambola', tambolaRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
