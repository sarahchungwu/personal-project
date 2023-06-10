import connection from '../db/connection'
// import { FrankenPokemon, Pokemon } from '../../models/PokemonModels'

// export async function getPokemon(db = connection) {
//   return db('pokemon').select() as Promise<Pokemon[]>
// }

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
