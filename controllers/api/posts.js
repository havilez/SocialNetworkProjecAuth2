var router = require('express').Router()
var Post = require('../../models/post')

router.get('/posts', function (req, res, next) {



  if ("auth" in req ) {
    Post.find({username: req.auth.username})
        .sort('-date')
        .exec(function (err, posts) {
          if (err) {
            return next(err)
          }
          res.json(posts)
        })
  }
 // else return next()
})

router.post('/posts', function (req, res, next) {
  var post = new Post({body: req.body.body})
  post.username = req.auth.username
  post.save(function (err, post) {
    if (err) { return next(err) }
    res.status(201).json(post)
  })
})

module.exports = router
