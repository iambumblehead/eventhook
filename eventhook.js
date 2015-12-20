// Filename: eventhook.js
// Timestamp: 2015.12.20-00:06:10 (last modified)
// Author(s): Bumblehead (www.bumblehead.com)


var eventhook = module.exports = (function (p) {

  var incrnum = 0;
  var proto = {
    fnArr: [],

    addFn: function (fn) {
      if (typeof fn === 'function') {
        fn.oname = 'fn' + ++incrnum;
        this.fnArr.push(fn);
      }
    },

    rmFn: function (fn) {
      var oname = fn.oname;

      if (typeof fn === 'function') {
        this.fnArr = this.fnArr.filter(function (fn) {
          return fn.oname !== oname;
        });
      }
    },

    fire: function (a1,a2,a3,a4) {
      var args = arguments;
      
      this.fnArr.map(function (fn) {
        fn.apply(0, args);
      });
    }
  };

  p = function () {
    var that = Object.create(proto);
    that.fnArr = [];
    return that;
  };

  p.proto = proto;

  return p;

}());
