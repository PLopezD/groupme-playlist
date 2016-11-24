
var Post = require("../api/post/postModel")

var createDoc = function(model, doc) {
  var favoritedArray = doc.favorited_by.split(',');

  
  doc.favorited_by = favoritedArray;
  console.log(doc)
  return new Promise(function(resolve, reject) {
    new model(doc).save(function(err, saved) {
      console.log("err -====-",err)
      console.log("saved -====-",saved)
      return err ? reject(err) : resolve(saved);
    });
  });
};

var test = {test:2}

createDoc(Post,test)