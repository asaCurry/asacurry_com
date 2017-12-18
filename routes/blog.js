
/*
 * GET Blog page.
 */

exports.blog = function(req, res){
  res.render('blog', { appTitle: 'Sick Startup Blog'});
};
