export interface DogData {
  name: string
  age: number
  breed: string
  description: string
  image: string
}

export interface DogDataBackend extends DogData {
  id: number
}
