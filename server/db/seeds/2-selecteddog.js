exports.seed = async function (knex) {
  await knex('selecteddog').insert([
    {
      id: 1,
      // give the default
      dogId: 4,
      dateCreated: Date.now(),
    },
  ])
}
