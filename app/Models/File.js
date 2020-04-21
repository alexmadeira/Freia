'use strict'
const Model = use('Model')
// const Env = use('Env')

class File extends Model {
  static get computed () {
    return ['url', 'thumb']
  }
  getUrl ({ key }) {
    return `https://alexmadeira.sirv.com/mark-viii/${key}`
  }
  getThumb ({ key }) {
    return `https://alexmadeira.sirv.com/mark-viii/${key}?thumb=true`
  }
}

module.exports = File
