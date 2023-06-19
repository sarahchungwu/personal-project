import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { DogDataBackend } from '../../common/dogs'
import { fetchDogs } from '../apis/dogsApis'
function PetMainPage() {
  const { isLoading, data } = useQuery('getDogs', async () => {
    return await fetchDogs()
  })

  return (
    <ul>
      <div className="formContainer">
        {!isLoading &&
          data &&
          data.map((dog) => (
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
