var express = require('express');
var router = express.Router();

var Urls = require('../DB/controllers/Urls')

router.get('/', Urls.list);
router.get('/:id', Urls.getListByID);
router.get('/save', Urls.save);
router.get('/del', Urls.del);
router.get('/test', function(req,res){
	res.json({ name:'123456'})
});

module.exports = router;
