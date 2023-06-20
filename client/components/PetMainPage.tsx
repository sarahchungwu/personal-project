import { FormEvent } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { addSelectedDog, fetchDogs } from '../apis/dogsApis'
function PetMainPage() {
  const { isLoading, data } = useQuery('getDogs', async () => {
    return await fetchDogs()
  })

  const queryClient = useQueryClient()
  const mutations = useMutation(addSelectedDog, {
    onSuccess: () => {
      console.log('selected')
    },
  })

  function handleSubmit(event: FormEvent, id: number) {
    event.preventDefault()
    console.log('Selected Dog ID:', id)
    mutations.mutate(id)
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
                    Select Dog
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
