
var rework = require('rework')
  , ignore = require('..');

describe('ignore', function(){
  it('should ignore selectors', function(){
    rework('.btn { color: red } div { width: 100px; }')
    .use(ignore('.btn'))
    .toString()
    .should.eql('div {\n  width: 100px;\n}');
  });
})
