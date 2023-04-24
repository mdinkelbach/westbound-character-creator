const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const Product = require('./Product');

const businessSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5
  },
  businessName: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
  },
  products: [Product.schema]
});

// set up pre-save middleware to create password
businessSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
businessSchema.methods.isCorrectPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

const Business = model('Business', businessSchema);

module.exports = Business;