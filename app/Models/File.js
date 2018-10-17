'use strict'
const Model = use('Model')
const Env = use('Env')

class File extends Model {
  static get computed () {
    return ['url', 'thumb']
  }
  getUrl ({ name }) {
    return `${Env.get('APP_BASEPATH')}/files/${name}`
  }
  getThumb ({ name }) {
    return `${Env.get('APP_BASEPATH')}/files/${name}?thumb=true`
  }
}

module.exports = File
