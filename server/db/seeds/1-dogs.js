exports.seed = async function (knex) {
  await knex('dogs').insert([
    {
      id: 1,
      name: 'Bubble',
      age: 2,
      breed: 'pug',
      personality: 'grumpy',
      description: 'always hungry',
      image: '/images/pug.jpg',
    },
    {
      id: 2,
      name: 'Lucas',
      age: 1,
      breed: 'husky',
      personality: 'Energetic',
      description:
        'love engaging in activities such as running, hiking, and playing',
      image: '/images/husky.jpg',
    },
    {
      id: 3,
      name: 'Kitty',
      age: 1,
      breed: 'shiba inu',
      personality: 'Strong-willed',
      description: 'Always choose to follow her own instincts and preference',
      image: '/images/shibaInu.jpg',
    },
    {
      id: 4,
      name: 'Buzz',
      age: 2,
      breed: 'samoyed',
      personality: 'Friendly',
      description:
        'enjoy the company of family members and are generally welcoming towards strangers',
      image: '/images/samoyed.jpg',
    },
  ])
}
