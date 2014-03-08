
/*
 * GET users listing.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var users = new Schema({
  name: {type: String}
});

Model = mongoose.model('users', users);
var UsersController = {

  list: function(req, res){
    console.log('list');
    return Model.find( function(err, users){
      res.render('list', {
        users: users
      });
    });
  },

   add: function(req, res) {
     user = new Model({name: req.body.name});

     user.save(function(err){
       if (!err){
         return console.log('created');
       } else {
          return console.log(err);
       }
     });
     res.redirect('/users', 301);
   },

   remove: function (req, res){
     var oneUser = new Model({name: req.params.name});
        Model.remove({name: req.params.name}, function(err){
          if(err) return next(err);
          res.redirect('/users');
      });   
   }
};

module.exports = UsersController;
