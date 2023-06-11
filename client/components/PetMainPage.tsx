import { DogDataBackend } from '../../models/dogs'
function PetMainPage() {
  const dogData: DogDataBackend[] = [
    {
      id: 1,
      name: 'Bubble',
      age: 2,
      breed: 'pug',
      discription: 'grumpy',
      image: './images/pug.jpg',
    },
    {
      id: 2,
      name: 'Lucas',
      age: 1,
      breed: 'husky',
      discription: 'sillybilly',
      image: '/images/husky.jpg',
    },
    {
      id: 3,
      name: 'Kitty',
      age: 1,
      breed: 'shiba inu',
      discription: 'love smiling',
      image: '/images/shibaInu.jpg',
    },
    {
      id: 4,
      name: 'Buzz',
      age: 2,
      breed: 'samoyed',
      discription: 'love walking',
      image: '/images/samoyed.jpg',
    },
  ]

  return <h1>Iam in the Pet Main Page</h1>
}

export default PetMainPage
