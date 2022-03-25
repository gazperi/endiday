import { useState, useEffect } from 'react'
import { calculatePercentage } from '../../utils/calculatePercentage'

function AllWeek() {
  const [theAllWeek, setAllWeek] = useState({ label: '', left: 100, spent: 0 })

  const curr = new Date()
  const start = new Date(curr.setDate(curr.getDate() - curr.getDay())).setHours(0, 0, 0, 0)
  const now = new Date().getTime()
  const end = new Date(curr.setDate(curr.getDate() - curr.getDay() + 6)).setHours(23, 59, 59, 999)
  const update = {
    label: 'All week',
    left: calculatePercentage(start, now, end).timeLeft,
    spent: calculatePercentage(start, now, end).timeSpent,
  }

  useEffect(() => {
    if (update) {
      setAllWeek(update)
    }
  }, [update.left])

  return theAllWeek
}

export { AllWeek }
