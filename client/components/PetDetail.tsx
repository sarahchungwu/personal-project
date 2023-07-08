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
    <div className="profile-box">
      <div className="profile-card" key={data.name}>
        <img src={`${data.image}`} alt={data.name} />
        <div className="profile-text-box">
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
        </div>

        <button type="submit" className="btn">
          Edit Profile
        </button>
      </div>
    </div>
  )
}

export default PetDetail
