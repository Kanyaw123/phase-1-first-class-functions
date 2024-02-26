function receivesAFunction(callback) {
    callback(); 
  }
  
  function namedFunction() {
    console.log("This is a named function");
  }
  
  function returnsANamedFunction() {
    return namedFunction; 
  }
  
  function returnsAnAnonymousFunction() {
    return function() {
      console.log("This is an anonymous function");
    };
  }
  

  describe('index', function() {
    it('receivesAFunction(callback)', function() {
      receivesAFunction(namedFunction);
    });
  
    it('returnsANamedFunction()', function() {
      const namedFunc = returnsANamedFunction();
      namedFunc(); 
    });
  
    it('returnsAnAnonymousFunction()', function() {
      const anonymousFunc = returnsAnAnonymousFunction();
      anonymousFunc(); 
    });
  });
  