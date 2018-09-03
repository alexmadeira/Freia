'use strict'
const Model = use('Model')
const Env = use('Env')

class File extends Model {
  static get computed () {
    return ['url']
  }
  getUrl ({ name }) {
    return `${Env.get('APP_URL')}/files/${name}`
  }
}

module.exports = File
