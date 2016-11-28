// TODO: Add your controller logic here.

const PostModel = require('../models/PostModel.js');

module.exports = {
  list: function(req, res, next) {
    PostModel.find(function(err, posts) {
      res.render('posts.ejs', {posts});
    });
  },

  show: function(req, res, next) {
    var id = req.params.id;
    PostModel.findOne({_id: id}, function(err, post) {
      res.render('post.ejs', {post});
    });
  },

  createForm: function(req, res, next) {
    // This will load a blank post form for the user complete. 
    res.render('post_form.ejs');
  },

  create: function(req, res, next) {
    var postMsg = new PostModel({
      author: req.body.author,
      date: req.body.date,
      text: req.body.text
    });
    postMsg.save(function(err, postMsg) {
      res.redirect('/');
    });
  },

  updateForm: function(req, res, next) {
    var id = req.params.id;
    PostModel.findOne({_id: id}, function(err, post) {
    // This will load the selected post with the entry fields pre-populated
    res.render('post_edit_form.ejs',{post: post.id, author: post.author,
    date: post.date, text: post.text});
    });
  },

  update: function(req, res, next) {
    var id = req.params.id;
    PostModel.findOne({_id: id}, function(err, post) {
      post.author = req.body.author;
      post.date = req.body.date;
      post.text = req.body.text;
      post.save(function(err, post){
        res.redirect('/');
      });
    });
  },

  remove: function(req, res, next) {
    var id = req.params.id;
    PostModel.findByIdAndRemove(id, function(err, post) {
      // res.json(post);
      res.redirect('/');
    });
  }
};
