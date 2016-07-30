var mongoose = require('mongoose')
var Tag = mongoose.model('Tag')

exports.save = function(req, res){
	var form = req.body.tag
	var tag = new Tag(form)

	tag.save(function(err,model){
		if(err){
			res.end(err)
		}
		res.json(model)
	})
}

exports.list = function(req,res){
	Tag.find({},function(err,model){
		if(err){
			res.end(err)
		}
		res.json(model)
	})
}