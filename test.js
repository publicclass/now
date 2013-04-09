var now = require(typeof __dirname != 'undefined' ? './' : 'now');

console.log('1..3')
assert(!isNaN(now()))
assert(typeof now() == 'number')
assert(now() > 0)

function assert(ok,desc){
  assert.i = (assert.i || 0) + 1;
  if( ok ){
    console.log('ok %s %s',assert.i,desc || '');
  } else {
    console.log('not ok %s %s',assert.i,desc || '');
  }
}