const db = require('./connection');
const { User, Business, Category, Product } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Wood-working' },
    { name: 'Leather' },
    { name: 'Jewelry' },
    { name: 'Textiles' },

  ]);
  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      productName: 'Birdhouse',
      description:
        'Cute wooden birdhouse for your backyard.',
      image: 'birdhouse.jpg',
      price: 25.99,
      quantity: 2,
    },
    {
      productName: 'Bison Billfold Wallet',
      description:
        'Wallet made from bison leather and lovingly hand laced.',
      image: 'bisonbillfoldwallet.jpg',
      price: 49.99,
      quantity: 1,
    },
    {
      productName: 'Topaz Pendant',
      description:
        'Rough cut topaz stone set in sterling silver setting.',
      image: 'topazpendant.jpg',
      price: 59.99,
      quantity: 2,
    },
    {
      productName: 'Black Skirt',
      description:
        'Pleated black skirt for nice movability.',
      image: 'blackskirt.jpg',
      price: 10.99,
      quantity: 5,
    },
  ]);

  console.log('products seeded');

  await Business.deleteMany();

  await Business.create({
    email: 'woodchippers@email.com',
    password: 'password1234',
    businessName: 'Wood Chippers',
    description: 'Wood Workers',
    image: 'logo.jpg',
    category: categories[0]._id,
    products: [products[0]],
  }),

  await Business.create({
    email: 'bigbexar@email.com',
    password: 'password1234',
    businessName: 'Big Bexar Leather',
    description: 'Leatherworkers',
    image: 'logo.jpg',
    category: categories[1]._id,
    products: [products[1]],
  }),

  await Business.create({
    email: 'windfind@email.com',
    password: 'password1234',
    businessName: 'Windings and Findings',
    description: 'Jewelry making',
    image: 'logo.jpg',
    category: categories[2]._id,
    products: [products[2]],
  }),

  await Business.create({
    email: 'scrappy@email.com',
    password: 'password1234',
    businessName: 'Sewy Scraps',
    description: 'Sewing',
    image: 'logo.jpg',
    category: categories[3]._id,
    products: [products[3]],
  });
  console.log('businesses seeded');

  await User.deleteMany();

  await User.create({
    userName: 'Lydia',
    email: 'lydia@email.com',
    password: 'password1234',
    favorites: [products[0]],
  });

  await User.create({
    userName: 'Jess',
    email: 'jess@email.com',
    password: 'password1234',
  });

  await User.create({
    userName: 'Chloe',
    email: 'chloe@email.com',
    password: 'password1234',
  });

  await User.create({
    userName: 'Michael',
    email: 'michael@email.com',
    password: 'password1234',
  });

  console.log('users seeded');

  process.exit();
});