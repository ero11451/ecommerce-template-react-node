const mongoose = require('mongoose'); // Assuming the Product model is in the models directory

mongoose.connect('mongodb+srv://neebohio:fedgac11451@cluster0.gsvraaz.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB!');
});