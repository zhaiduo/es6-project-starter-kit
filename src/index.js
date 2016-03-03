import helpers from './helpers/helpers'

/**
 * An awesome script
 */

/*class myConsole extends console {
  constructor() {
    super()
  }
  static log(...args) {
    console.log('args', args)
  }
}*/

export default class {
  constructor(name = 'Dear Coder', text = 'hi there') {
    const version = '0.0.1'
    let author = 'me'
    this.PI = 3.1415926
    this.name = name
    this.text = text
    this.es6Test()
  }
  get message() {
    return `${this.text} ${this.name}!`
  }
  set message(text) {
    this.text = helpers.trim(text)
  }
  notRealConst() {
    const a = []
    a.push('Hello')
    console.log('[notRealConst]: a', a)
  }
  realConst() {
    const a = Object.freeze([])
    try {
      a.push('Hello')
    } catch (ex) {
      console.log('[realConst]: ', ex)
    }
  }
  defaultValue() {
    let x1, y1
    let x2, y2
    //[x1, y1 = 'b'] = ['a', 'a']
    //[x2, y2 = 'b'] = ['a', undefined]
    [x2, y2 = 'b'] = ['a', null]
    let { log, sin, cos } = Math
    console.log('[defaultValue]: y1', y1, 'y2', y2, cos(this.PI))
  }
  testReduce() {
    let v = [1, 2, 3].reduce( (prev, curr, currIndex) => prev + curr )
    console.log('[testReduce]: ', v)
  }
  testBrackets() {
    let n2 = '^^'
    let text2 = function(n) {
      return 'cool['+n+']'
    }
    let tmpl = 'return '+'`could it be ${text(n)}?`'
    //console.log('(parseInt.prop)', Array.from('12345678').map((x) => parseInt(x, 10)))
    let func = new Function('text', 'n', tmpl)
    //let func = eval.call(null, '(name) => `Hello ${name}!`');
    console.log(func(text2, n2))

    function codePointLength(text) {
      let result = text.match(/[\s\S]/gu)
      return result ? result.length : 0
    }
    console.log('codePointLength', codePointLength('嘻嘻'))
    //console.log(/^b/y.exec('aba') === /^b/.exec('aba'))

    function escapeRegExp(str) {
      return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
    }

    let str = '/path/to/resource.html?search=query'
    console.log('escapeRegExp', escapeRegExp(str))
  }
  es6Test() {
    this.notRealConst()
    this.realConst()
    this.defaultValue()
    this.testReduce()
    this.testBrackets()
    console.log('\n\n\n\n\n\n\n\n\n\n\n\n\n')
  }
}