import { FormEvent } from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import { fetchDogs } from '../apis/dogsApis'
function PetMainPage() {
  const { isLoading, data } = useQuery('getDogs', async () => {
    return await fetchDogs()
  })

  function handleSubmit(event: FormEvent, id: number) {
    event.preventDefault()
    console.log('Selected Dog ID:', id)
  }

  return (
    <form className="dogForm">
      <ul>
        <div className="formContainer">
          {!isLoading &&
            data &&
            data.map((dog) => (
              <li key={dog.id}>
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
                  <button
                    type="submit"
                    onClick={(event) => handleSubmit(event, dog.id)}
                  >
                    <Link
                      to={`/detail/${dog.id}`}
                      style={{ textDecoration: 'none', color: '#694E4E' }}
                    >
                      Select Dog
                    </Link>
                  </button>
                </div>
              </li>
            ))}
        </div>
      </ul>
    </form>
  )
}

export default PetMainPage
