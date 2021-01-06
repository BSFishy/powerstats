import { Lifter } from './lifter'

export interface Location {
  id: number
  name: string
}

export interface Meet {
  id: number
  location: Location
  lifters: Lifter[]
}

export default Meet
