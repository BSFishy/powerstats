import { Lifter } from './lifter'

export interface Attempt {
  amount: number
  scratch: boolean
}

export type Lift = [Attempt, Attempt, Attempt]

export interface Lifts {
  squat: Lift
  bench: Lift
  deadlift: Lift
}

export interface Record extends Lifts {
  id: number
  lifter: Lifter
}

export default Record
