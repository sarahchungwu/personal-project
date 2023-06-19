exports.up = function (knex) {
  return knex.schema.createTable('selecteddog', (table) => {
    table.increments('id').primary()
    table.integer('dogId').references('dogs.id')
    table.timestamp('dateCreated').defaultTo(knex.fn.now())
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('selecteddog')
}
