import request from 'superagent'
import { DogData, DogDataBackend } from '../../common/dogs'

const rootUrl = 'api/v1/dogs'

export async function fetchDogs() {
  const res = await request.get(rootUrl)
  return res.body as DogDataBackend[]
}

export async function addSelectedDog(id: number) {
  return request.post(rootUrl).send({ id: id })
}
