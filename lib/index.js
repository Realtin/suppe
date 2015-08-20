var ref = require('ref');
var StructType = require("ref-struct");
var ffi = require('ffi');

var Post = StructType({
  title: String,
  link: String,
  description: String,
});
// var vecPost = ref.refType(ref.types.Object);

var lib = ffi.Library('target/debug/libmain', {
    'get_soup': ['Vec<Post>', ['String']]
});

var posts = lib.get_soup("realtin");
console.log('done!');
console.log(posts[0]);
