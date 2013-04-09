var now = require(typeof __dirname != 'undefined' ? './' : 'now');

console.log('1..4')
assert(!isNaN(now()))
assert(typeof now() == 'number')
assert(now() > 0)
var n = now();
setTimeout(function(){
  assert(n!==now())
},10)

function assert(ok,desc){
  assert.i = (assert.i || 0) + 1;
  if( ok ){
    console.log('ok %s %s',assert.i,desc || '');
  } else {
    console.log('not ok %s %s',assert.i,desc || '');
  }
}