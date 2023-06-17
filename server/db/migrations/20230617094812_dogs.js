exports.up = function (knex) {
  return knex.schema.createTable('dogs', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.integer('age')
    table.string('breed')
    table.string('personality')
    table.string('description')
    table.string('image')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('dogs')
}
