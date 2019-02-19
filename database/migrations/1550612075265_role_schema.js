'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RoleSchema extends Schema {
  up () {
    this.table('agencies', table => {
      table
        .string('roleDescription')
        .notNullable()
        .defaultTo('lorem')
      table
        .integer('logo_id')
        .unsigned()
        .references('id')
        .inTable('files')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
    })
  }

  down () {
    this.table('agencies', table => {
      table.dropColumn('roleDescription')
      table.dropColumn('logo_id')
    })
  }
}

module.exports = RoleSchema
