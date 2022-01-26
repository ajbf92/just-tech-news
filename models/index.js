// using the index.js file to collect all of the models and package them up for us.
const Post = require("./post");
const User = require("./User");

// create associations
User.hasMany(Post, {
  foreignKey: "user_id",
});
Post.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Post };
