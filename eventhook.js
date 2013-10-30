// Filename: eventhook.js
// Timestamp: 2013.10.30-10:51:34 (last modified)  
// Author(s): Bumblehead (www.bumblehead.com)
// Requires: incrnum.js

var incrnum = require('incrnum');

var eventhook = ((typeof module === 'object') ? module : {}).exports = (function () {

  var proto = {
    fnArr: [],

    addFn: function (fn) {
      if (typeof fn === 'function') {
        fn.oname = 'fn' + incrnum;
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
      this.fnArr.map(function (fn) {
        fn(a1,a2,a3,a4);
      });
    }
  };

  return {
    proto : proto,
    getNew : function () {
      var that = Object.create(proto);
      that.fnArr = [];
      return that;
    }
  };

}());
