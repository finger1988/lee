var path = require('path')

var index = require('./routes/index')
var user = require('./routes/users')
var article = require('./routes/article')

var routes = function(app){
	app.use('/',index)
	app.use('/user',user)
	app.use('/article',article)
}
module.exports = routes