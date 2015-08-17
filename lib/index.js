var ffi = require('ffi');


var lib = ffi.Library('target/debug/libmain', {
    'get_soup': ['vec::Vec', ['String']]
});

var posts = lib.get_soup("realtin");
console.log('done!');
console.log(posts[0]);
