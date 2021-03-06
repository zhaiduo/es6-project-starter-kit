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
            this.PI = 3.1415926;
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
            key: 'defaultValue',
            value: function defaultValue() {
                var x1 = void 0,
                    y1 = void 0;
                var x2 = void 0,
                    y2 = void 0;
                x2 = 'a';
                var _ref = null;
                y2 = _ref === undefined ? 'b' : _ref;
                var log = Math.log;
                var sin = Math.sin;
                var cos = Math.cos;

                console.log('[defaultValue]: y1', y1, 'y2', y2, cos(this.PI));
            }
        }, {
            key: 'testReduce',
            value: function testReduce() {
                var v = [1, 2, 3].reduce(function (prev, curr, currIndex) {
                    return prev + curr;
                });
                console.log('[testReduce]: ', v);
            }
        }, {
            key: 'testBrackets',
            value: function testBrackets() {
                var n2 = '^^';
                var text2 = function text2(n) {
                    return 'cool[' + n + ']';
                };
                var tmpl = 'return ' + '`could it be ${text(n)}?`';

                var func = new Function('text', 'n', tmpl);

                console.log(func(text2, n2));

                function codePointLength(text) {
                    var result = text.match(/(?:[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g);
                    return result ? result.length : 0;
                }
                console.log('codePointLength', codePointLength('嘻嘻'));


                function escapeRegExp(str) {
                    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
                }

                var str = '/path/to/resource.html?search=query';
                console.log('escapeRegExp', escapeRegExp(str));
            }
        }, {
            key: 'add',
            value: function add(x, y) {
                return x + y;
            }
        }, {
            key: 'square',
            value: function square(x) {
                return x * x;
            }
        }, {
            key: 'composeMany',
            value: function composeMany() {
                var _this = this;

                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                var funcs = args;
                return function () {
                    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                        args[_key2] = arguments[_key2];
                    }

                    funcs.forEach(function (func) {
                        args = [func.apply(_this, args)];
                        console.log("addThenSquare==========", args);
                    });
                    return args[0];
                };
            }
        }, {
            key: 'es6Test',
            value: function es6Test() {
                this.notRealConst();
                this.realConst();
                this.defaultValue();
                this.testReduce();
                this.testBrackets();

                var addThenSquare = this.composeMany(this.add, this.square);
                console.log("addThenSquare", addThenSquare(1, 2));

                console.log('\n\n\n\n\n\n\n\n\n\n\n\n\n');
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