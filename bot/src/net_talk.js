const path = require('path');
const readline = require('readline');
const rl =
    readline.createInterface({input: process.stdin, output: process.stdout});

const rust_funcs = {
  fibo: ['int', ['int']]
};
var ffi = require('ffi');

// Import Rust functions
var rust_lib = ffi.Library(
    path.join(__dirname, '/../../net_man/target/debug/libnet_man'), rust_funcs);

// Use the function
rl.question('What fibo do you want? ', (answer) => {
  console.log('The fibo is:' + rust_lib.fibo(parseInt(answer)));
  rl.close();
});
