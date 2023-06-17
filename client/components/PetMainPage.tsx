import { DogDataBackend } from '../../common/dogs'
function PetMainPage() {
  const dogData: DogDataBackend[] = [
    {
      id: 1,
      name: 'Bubble',
      age: 2,
      breed: 'pug',
      personality: 'grumpy',
      description: 'always hungry',
      image: './images/pug.jpg',
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
  ]

  return (
    <ul>
      <div className="formContainer">
        {dogData.map((dog) => (
          <li key={dog.id}>
            <form className="dogForm">
              <div className="dogBox">
                <img src={dog.image} alt={dog.name} />
                <p>
                  <b>Name</b>: {dog.name}
                </p>
                <p>
                  <b>Age</b>: {dog.age}
                </p>
                <p>
                  <b>Breed</b>: {dog.breed}
                </p>
                <p>
                  <b>Personality</b>: {dog.personality}
                </p>
                <p>
                  <b>Description</b>: {dog.description}
                </p>
                <button type="button" onClick={() => handleSelectDog(dog)}>
                  Select Dog
                </button>
              </div>
            </form>
          </li>
        ))}
      </div>
    </ul>
  )
}

export default PetMainPage
