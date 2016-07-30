var express = require('express');
var router = express.Router();

var Article = require('../DB/controllers/Article')

router.get('/', Article.list);
router.get('/:id', Article.getListByID);
router.get('/save', Article.save);
router.get('/del', Article.del);
// router.get('/:id', function(req,res){

// 	res.json({ name: req.params.id , id: req.query.id})
// });

module.exports = router;
