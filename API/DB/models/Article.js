/**
 * Created by lihui
 * 文章分享
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
    title:  String,
    link : String, // 链接
    username : String,
    pv : {type : Number, default : 0},
    pc : {type : Number, default : 0},
    state: { type:Number, default: 0} ,  //0 未读  1 已读
    tags:{
        type:Schema.Types.ObjectId,
        ref:'Tag'
    },
    meta: {
        createAt: {
          type: Date,
          default: Date.now()
        },
        updateAt: {
          type: Date,
          default: Date.now()
        }
    }
});

ArticleSchema.pre('save', function(next) {
  if (this.isNew) {
    this.meta.createAt = this.meta.updateAt = Date.now()
  }
  else {
    this.meta.updateAt = Date.now()
  }
  next()
})

var Article = mongoose.model("Article",ArticleSchema);

module.exports = Article;