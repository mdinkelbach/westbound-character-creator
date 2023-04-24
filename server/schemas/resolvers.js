const { AuthenticationError } = require('apollo-server-express');
const { User, Product, Category, Business } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    categories: async () => {
      return await Category.find();
    },

    products: async () => {
      return await Product.find();
    },

    product: async (parent, { _id }) => {
      return await Product.findById(_id);
    },

    businesses: async () => {
      return await Business.find().populate('category').populate('products');
    },

    business: async (parent, { businessId }) => {
      return await Business.findById(businessId);
    },

    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in.');
    }
  },

  Mutation: {
    addUser: async (parent, { userName, email, password }) => {
      const user = await User.create({ userName, email, password });
      const token = signToken(user);
      return { token, user };
    },

    updateUser: async (parent, args, context) => {
      if (context.user) {
        return User.findByIdAndUpdate(context.user._id, args, { new: true });
      }
      throw new AuthenticationError('You need to be logged in.');
    },

    addProduct: async (parent, { productName, description, image, price, quantity }, context) => {
      if (context.user) {
        const product = await Product.create({
          productName: productName,
          description: description,
          image: image,
          price: price,
          quantity: quantity
        });
        const addProduct = await Business.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { products: product } },
          { new: true }
        );
        return addProduct;
      }
      throw new AuthenticationError('You must be logged in as a business.');
    },

    deleteProduct: async (parent, { productId }, context) => {
      if (context.user) {
        const product = await Product.findOneAndDelete({
          _id: productId
        });
        return await Business.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { products: product } },
          { new: true, runValidators: true }
        );
      }
      throw new AuthenticationError('You must be logged in as a business.');
    },

    addBusiness: async (parent, args) => {
      const business = await Business.create(args);
      const token = signToken(business);
      return { token, business };
    },

    updateBusiness: async (parent, args, context) => {
      if (context.user) {
        return await Business.findByIdAndUpdate(context.user._id, args, { new: true });
      }
      throw new AuthenticationError('You must be logged in as a business.');
    },

    addFavorite: async (parent, args, context) => {
      const { productId } = args;

      if (context.user) {
        const product = await Product.findById(productId);
        const favorites = await User.findByIdAndUpdate(context.user._id,
          { $addToSet: { favorites: product } }, { new: true });
        return favorites;
      }
      throw new AuthenticationError('You must be logged in.');
    },

    deleteFavorite: async (parent, { productId }, context) => {
      if (context.user) {
        const delfavorites = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { favorites: { _id: productId } } },
          { new: true, runValidators: true }
        );
        return delfavorites;
      }
      throw new AuthenticationError('You must be logged in.');
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError('Incorrect email or password.');
      }

      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError('Incorrect email or password.');
      }
      const token = signToken(user);
      return { token, user };
    },

    businessLogin: async (parent, { email, password }) => {
      const business = await Business.findOne({ email });

      if (!business) {
        console.log(business);
        throw new AuthenticationError('Incorrect business email or password.');
      }
      const correctPw = await business.isCorrectPassword(password);
      if (!correctPw) {
        console.log('password:', correctPw);
        throw new AuthenticationError('Incorrect business name or password.');
      }
      const token = signToken(business);
      return { token, business };
    }
  }
};

module.exports = resolvers;
