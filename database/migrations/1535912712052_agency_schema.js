'use strict'

const Schema = use('Schema')

class AgencySchema extends Schema {
  up () {
    this.create('agencies', table => {
      table.increments()
      table
        .integer('file_id')
        .unsigned()
        .references('id')
        .inTable('files')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table.string('name').notNullable()
      table.text('description')
      table.string('role').notNullable()
      table.date('enter')
      table.date('exit')
      table.timestamps()
    })
  }

  down () {
    this.drop('agencies')
  }
}

module.exports = AgencySchema
