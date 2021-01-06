import { Lifter } from '@/interfaces/lifter'
import { Record, Lift, Attempt } from '@/interfaces/record'

export const average = (lift: Lift): number | null => {
  let sum: number = 0
  let total: number = 0

  for (const attempt of lift) {
    if (!attempt.scratch) {
      sum += attempt.amount
      total++
    }
  }

  return total > 0 ? sum / total : null
}

export const max = (lift: Lift): number | null => {
  let high: number | null = null

  for (const attempt of lift) {
    if (!attempt.scratch) {
      if (high === null || attempt.amount > high) {
        high = attempt.amount
      }
    }
  }

  return high
}
