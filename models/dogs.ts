export interface DogData {
  name: string
  age: number
  breed: string
  discription: string
  image: string
}

export interface DogDataBackend extends DogData {
  id: number
}
