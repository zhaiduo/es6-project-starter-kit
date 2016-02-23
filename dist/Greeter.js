(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('Greeter', ['module'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod);
    global.Greeter = mod.exports;
  }
})(this, function (module) {
  'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var helpers = {
    trim: function trim(string) {
      return string.replace(/^\s+|\s+$/gm, '');
    }
  };

  var index = function () {
    function index() {
      var name = arguments.length <= 0 || arguments[0] === undefined ? 'Dear Coder' : arguments[0];
      var text = arguments.length <= 1 || arguments[1] === undefined ? 'hi there' : arguments[1];

      _classCallCheck(this, index);

      var version = '0.0.1';
      var author = 'me';
      this.name = name;
      this.text = text;
      this.es6Test();
    }

    _createClass(index, [{
      key: 'notRealConst',
      value: function notRealConst() {
        var a = [];
        a.push('Hello');
        console.log('[notRealConst]: a', a);
      }
    }, {
      key: 'realConst',
      value: function realConst() {
        var a = Object.freeze([]);
        try {
          a.push('Hello');
        } catch (ex) {
          console.log('[realConst]: ', ex);
        }
      }
    }, {
      key: 'es6Test',
      value: function es6Test() {
        this.notRealConst();
        this.realConst();
      }
    }, {
      key: 'message',
      get: function get() {
        return this.text + ' ' + this.name + '!';
      },
      set: function set(text) {
        this.text = helpers.trim(text);
      }
    }]);

    return index;
  }();

  module.exports = index;
});