import { DogData, SelectedDog } from '../../common/dogs'
import connection from '../db/connection'

export function getAllDogs(db = connection) {
  return db('dogs').select() as Promise<DogData[]>
}

// export function createSelectedDog(id: number, db = connection) {
//   const selecteDog: SelectedDog = {
//     dogId: id,
//     dateCreated: Date.now(),
//   }
//   return db('selecteddog')
//     .insert(selecteDog)
//     .then((ids) => ids[0])
// }

// export async function getSelectedDog(id: number, db = connection) {
//   return db('selecteddog')
//     .join('dogs', 'selecteddog.dogId', 'dogs.id')
//     .where('dogs.id', id)
//     .select(
//       'dogs.name as dogName',
//       'dogs.age as dogAge',
//       'dogs.breed as dogBreed',
//       'dogs.personality as dogPersonality',
//       'dogs.description as dogDescription',
//       'dogs.image as dogImage'
//     )
// }
