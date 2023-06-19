exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('selecteddog').del()
  await knex('selecteddog').insert([
    {
      id: 1,
      // give the default
      dogId: 4,
      dateCreated: Date.now(),
    },
  ])
}
