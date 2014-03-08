
/*
 * GET home page.
 */

var PagesController = {

  index: function(req, res){
    console.log('index');
    res.render('index', { title: 'Express' });
  }
}

module.exports = PagesController;
