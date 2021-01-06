import { Lifter } from './lifter'

export type Lift = [number, number, number]

export interface Record {
  id: number
  lifter: Lifter
  squat: Lift
  bench: Lift
  deadlift: Lift
}

export default Record
