import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { fetchSelectedDog } from '../apis/dogsApis'

function PetDetail() {
  const dogId = useParams().id

  const { isLoading, data } = useQuery(
    ['fetchSelectedDog', dogId],
    async () => {
      return await fetchSelectedDog(Number(dogId))
    }
  )
  if (isLoading) return 'Loading...'

  if (!data) {
    return 'No data available'
  }

  if (data === null) {
    return 'Selected dog not found'
  }

  return (
    <>
      <div className="Profile-form">
        <div className="dogBox" key={data.name}>
          <img src={`${data.image}`} alt={data.name} />
          <p>
            <b>Name</b>: {data.name}
          </p>
          <p>
            <b>Age</b>: {data.age}
          </p>
          <p>
            <b>Breed</b>: {data.breed}
          </p>
          <p>
            <b>Personality</b>: {data.personality}
          </p>
          <p>
            <b>Description</b>: {data.description}
          </p>
          <button type="submit">Edit Profile</button>
        </div>

        {/* <h1>Bubble-Variable</h1>
        <img src="" alt="" />
        <p>
          <b>Name</b>
        </p>
        <p>
          <b>Age</b>: {data.age}
        </p>
        <p>
          <b>Breed</b>: {data.breed}
        </p>
        <p>
          <b>Personality</b>: {data.personality}
        </p>
        <p>
          <b>Description</b>:{data.description}
        </p>
        <button type="button">Edit Dog</button> */}
      </div>
    </>
  )
}

export default PetDetail
