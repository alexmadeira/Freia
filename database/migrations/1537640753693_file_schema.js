'use strict'

const Schema = use('Schema')

class FileSchema extends Schema {
  up () {
    this.table('files', table => {
      table.string('thumb')
    })
  }

  down () {
    this.table('files', table => {
      table.dropColumn('thumb')
    })
  }
}

module.exports = FileSchema
