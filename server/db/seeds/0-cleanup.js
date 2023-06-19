exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('selecteddog').del()
  await knex('dogs').del()
}
