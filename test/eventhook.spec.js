// Filename: eventhook.spec.js  
// Timestamp: 2013.10.30-10:51:00 (last modified)  
// Author(s): Bumblehead (www.bumblehead.com)  

var eventhook = require('../eventhook');

describe("eventhook", function () {
  it("should return an eventhook object", function () {
    var ehook = eventhook();

    expect( Array.isArray(ehook.fnArr) ).toBe( true );
  });
});

describe("ehook.addFn", function () {
  it("should add a function", function () {
    var ehook = eventhook(),
        testval = 0,
        testFn = function () { testval = 5; };

    ehook.addFn(testFn);

    expect( typeof ehook.fnArr[0] ).toBe( 'function' );
  });

  it("should not add anything not a function", function () {
    var ehook = eventhook(),
        testval = 0,
        testFn = 0;

    ehook.addFn(testFn);

    expect( ehook.fnArr.length ).toBe( 0 );
  });
});

describe("ehook.fire", function () {
  it("should call added functions", function () {  
    var ehook = eventhook(),
        testval = 0,
        testFn = function () { testval += 5; },
        testFn2 = function () { testval += 2; };

    ehook.addFn(testFn);
    ehook.addFn(testFn2);

    ehook.fire();
    ehook.fire();

    expect( testval ).toBe( 14 );
  });
});

describe("ehook.rmFn", function () {
  it("should call remove added functions", function () {  
    var ehook = eventhook(),
        testFn = function () { };

    ehook.addFn(testFn);
    ehook.rmFn(testFn);

    expect( ehook.fnArr.length ).toBe( 0 );    
  });
});
