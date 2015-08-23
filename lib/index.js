var ref = require('ref');
var StructType = require("ref-struct");
var ffi = require('ffi');

// var vecPost = ref.refType(ref.types.Object);

var lib = ffi.Library('target/debug/libmain', {
    'get_soup': ['string', ['string']]
});

var posts = lib.get_soup("realtin");
console.log('done!');
console.log(posts);
