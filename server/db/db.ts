import { DogData } from '../../common/dogs'
import connection from '../db/connection'

export async function getAllDogs(db = connection) {
  return db('dogs').select() as Promise<DogData[]>
}

// export async function getFrankenPokemon(db = connection) {
//   return db('frankenpokemon').select() as Promise<FrankenPokemon[]>
// }

// export async function addPokemon(newPokemon: Pokemon, db = connection) {
//   const newPok = {
//     id: newPokemon.id,
//     name: newPokemon.name,
//     sprite: newPokemon.sprite,
//     isShown: false,
//   }

//   return db('pokemon')
//     .insert(newPok)
//     .then((ids) => ids[0])
// }

// export async function selectFrankenPokemon(id: number, db = connection) {
//   return db('frankenpokemon').select().where('id', id) as Promise<
//     FrankenPokemon[]
//   >
// }

// export async function updateFrankenPokemon(id: number, db = connection) {
//   return db('frankenpokemon').where('id', id).update({isShown = true}) as Promise<
//     FrankenPokemon[]
//   >
// }
