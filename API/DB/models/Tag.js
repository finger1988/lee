/**
 * Created by lihui
 * 标签
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TagSchema = new Schema({
    name:  {type:String,unique:true},
    article: [{type:Schema.Types.ObjectId,ref:'Article'}],
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

TagSchema.pre('save', function(next) {
  if (this.isNew) {
    this.meta.createAt = this.meta.updateAt = Date.now()
  }
  else {
    this.meta.updateAt = Date.now()
  }
  next()
})

var Tag = mongoose.model("Tag",TagSchema);

module.exports = Tag;