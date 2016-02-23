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
  es6Test() {
    this.notRealConst()
    this.realConst()
  }
}