import { DogDataBackend } from '../../models/dogs'
function PetMainPage() {
  const dogData: DogDataBackend[] = [
    {
      id: 1,
      name: 'Bubble',
      age: 2,
      breed: 'pug',
      description: 'grumpy',
      image: './images/pug.jpg',
    },
    {
      id: 2,
      name: 'Lucas',
      age: 1,
      breed: 'husky',
      description: 'sillybilly',
      image: '/images/husky.jpg',
    },
    {
      id: 3,
      name: 'Kitty',
      age: 1,
      breed: 'shiba inu',
      description: 'love smiling',
      image: '/images/shibaInu.jpg',
    },
    {
      id: 4,
      name: 'Buzz',
      age: 2,
      breed: 'samoyed',
      description: 'love walking',
      image: '/images/samoyed.jpg',
    },
  ]

  return (
    <ul>
      {dogData.map((dog) => (
        <li key={dog.id}>
          <div className="formContainer">
            <form className="dogForm">
              <div className="dogBox">
                <img src={dog.image} alt={dog.name} />
                <p>Name: {dog.name}</p>
                <p>Age: {dog.age}</p>
                <p>Breed: {dog.breed}</p>
                <p>Description: {dog.description}</p>
                <button type="button" onClick={() => handleSelectDog(dog)}>
                  Select Dog
                </button>
              </div>
            </form>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default PetMainPage
