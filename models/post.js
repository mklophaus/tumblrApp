var mongoose = require('mongoose');

var postSchema = new mongoose.Schema({
  title:     String,
  subject:   String,
  date:  String,
  author:      String,
});

// Create the model using your schema.
var Post = mongoose.model('Post', postSchema);

// Export the model of the Fish.
module.exports = Post;
