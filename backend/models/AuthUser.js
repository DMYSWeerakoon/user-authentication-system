// 1. Import mongoose
const mongoose = require('mongoose');

// 2. Create a schema for the user
const authUserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },

  password: {
    type: String,
    required: true
  }
}, {
  timestamps: true  // automatically adds createdAt and updatedAt
});

// 3. Export the model
module.exports = mongoose.model('AuthUser', authUserSchema);
