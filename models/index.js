// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
const seedProductTags = require('../seeds/product-tag-seeds');

// Products belongsTo Category
Product.belongsTo(Category, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'product'
});
// Categories have many Products
Category.belongsToMany(Product, {
  through: {
    model: Tag,
    unique: false
  },
  as: 'category'
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'product_tag1'
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'product_tag2'
})
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
