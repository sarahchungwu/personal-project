import { useEffect, useState } from 'react'
import { DogDataBackend } from '../../common/dogs'
import { fetchDogs } from '../apis/dogsApis'
function PetMainPage() {
  const [dogs, setDogs] = useState([] as DogDataBackend[])
  useEffect(() => {
    loadDogDetails()
  }, [])

  function loadDogDetails() {
    fetchDogs()
      .then((fetchedDogs) => {
        // Set the state for dogs
        setDogs(fetchedDogs)
      })
      .catch((err) => {
        if (err instanceof Error) {
          console.error(err.message)
        }
      })
  }

  return (
    <ul>
      <div className="formContainer">
        {dogs.map((dog) => (
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
