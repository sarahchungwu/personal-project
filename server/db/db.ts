import { DogData, DogDataBackend } from '../../common/dogs'
import connection from '../db/connection'

export function getAllDogs(db = connection) {
  return db('dogs').select() as Promise<DogDataBackend[]>
}

export function getSelectedDog(id: number, db = connection) {
  return db('dogs')
    .where('id', id)
    .select('name', 'age', 'breed', 'personality', 'image', 'description')
    .first() as Promise<DogData[]>
}
