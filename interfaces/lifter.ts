import { Record } from './record'

export interface Name {
  first: string
  last: string
}

export interface LifterInfo {
  name: Name
  grade?: number
}

export interface Lifter {
  id: number
  info: LifterInfo
  records: Record[]
}

export default Lifter
