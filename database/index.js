const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/stringapp');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Mongoose Connected'));

const inputSchema = mongoose.Schema({
  name: String,
});

const Input = mongoose.model('input', inputSchema);

const saveInput = (userInput) => {
  const newInput = new Input({ name: userInput });
  return newInput.save();
};

module.exports = saveInput;
