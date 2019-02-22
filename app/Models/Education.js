'use strict'

const Model = use('Model')

class Education extends Model {
  image () {
    return this.belongsTo('App/Models/File')
  }
}

module.exports = Education
