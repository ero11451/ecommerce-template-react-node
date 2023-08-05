
import mongoose from 'mongoose';
// Define the category schema
const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  // Add any other fields you want for the category
  // For example: image, parentCategory, etc.
});

// Create the category model
const Category = mongoose.model('Category', categorySchema);

// Export the model to be used in other parts of the application
module.exports = Category;
