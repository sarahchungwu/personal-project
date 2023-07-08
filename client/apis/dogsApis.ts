import request from 'superagent'
import { DogData, DogDataBackend } from '../../common/dogs'

const rootUrl = 'http://localhost:5173/api/v1/dogs'

//fetch all dogs
export async function fetchDogs() {
  const res = await request.get(rootUrl)
  return res.body as DogDataBackend[]
}

export async function fetchSelectedDog(dogId: number) {
  const url = `${rootUrl}/detail/${dogId}`
  const res = await request.get(url)

  if (res.body) {
    return res.body.selectedDog as DogData
  } else {
    throw new Error('Invalid server response')
  }
}
