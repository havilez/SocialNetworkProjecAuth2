var express = require('express')
var router  = express.Router()

var path = require('path');

router.use(express.static(__dirname + '/../assets'))
//router.use('/templates', express.static(__dirname + '/../templates'))

router.get('/', function (req, res) {
  // render/ejs is now easier to use since
  // sendFile has security restrictions on relative pathing
  /// res.render('app.html.ejs')
  res.render('index');

  /***
  res.sendFile(path.join(__dirname + '/../views/index.html'), function (err) {
    if (err) {
      console.log(err);
    }
    else {
      console.log('Sent: index.html');
    }


  })
   **/

})

module.exports = router
