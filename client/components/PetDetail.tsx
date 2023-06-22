import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { fetchDogs } from '../apis/dogsApis'

function PetDetail() {
  const { isLoading, data } = useQuery('getDogs', async () => {
    return await fetchDogs()
  })
  const id = Number(useParams().id) as number

  return (
    <>
      <div className="Profile-form">
        {/* {!isLoading && data && data.filter()} */}
        <h1>Bubble-Variable</h1>
        <img src="" alt="" />
        <p>
          <b>{id}</b>:test
        </p>
        <p>
          <b>Age</b>: test
        </p>
        <p>
          <b>Breed</b>: test
        </p>
        <p>
          <b>Personality</b>: test
        </p>
        <p>
          <b>Description</b>: test
        </p>
        <button type="button">Edit Dog</button>
      </div>
    </>
  )
}

export default PetDetail
