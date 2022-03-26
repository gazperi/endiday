import { useState, useEffect } from 'react'
import { calculatePercentage } from '../../utils/calculatePercentage'

function WorkWeek() {
  const [theWorkWeek, setWorkWeek] = useState({ label: '', left: 100, spent: 0 })

  const start = new Date(
    new Date().setDate(new Date().getDate() - new Date().getDay() + 1)
  ).setHours(0, 0, 0, 0)
  const now = new Date().getTime()
  const end = new Date(new Date().setDate(new Date().getDate() - new Date().getDay() + 5)).setHours(
    23,
    59,
    59,
    999
  )

  switch (new Date().getDay()) {
    case 0:
      var update = {
        label: 'Work week',
        left: 100,
        spent: 0,
      }
      break
    case 6:
      update = {
        label: 'Work week',
        left: 0,
        spent: 100,
      }
      break
    default:
      update = {
        label: 'Work week',
        left: calculatePercentage(start, now, end).timeLeft,
        spent: calculatePercentage(start, now, end).timeSpent,
      }
  }

  useEffect(() => {
    if (update) {
      setWorkWeek(update)
    }
  }, [update.left])

  return theWorkWeek
}

export { WorkWeek }
