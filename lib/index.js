var ffi = require('ffi');


var lib = ffi.Library(path.join(__dirname, '../target/release/libembed'), {
  fibonacci: ['int', ['int']]
});

var num = lib.fibonacci(20);
