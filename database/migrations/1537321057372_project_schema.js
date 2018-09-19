'use strict'

const Schema = use('Schema')

class ProjectSchema extends Schema {
  up () {
    this.table('projects', (table) => {
      table.string('url')
    })
  }

  down () {
    this.table('projects', (table) => {
      table.dropColumn('url')
    })
  }
}

module.exports = ProjectSchema
