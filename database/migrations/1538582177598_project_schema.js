'use strict'

const Schema = use('Schema')

class ProjectSchema extends Schema {
  up () {
    this.table('projects', table => {
      table
        .integer('nextProject_id')
        .unsigned()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
    })
  }

  down () {
    this.table('projects', table => {
      table.dropColumn('nextProject_id')
    })
  }
}

module.exports = ProjectSchema
