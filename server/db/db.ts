import { DogData } from '../../common/dogs'
import connection from '../db/connection'

export async function getAllDogs(db = connection) {
  return db('dogs').select() as Promise<DogData[]>
}
