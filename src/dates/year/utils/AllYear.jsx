import { useState, useEffect } from 'react'
import { calculatePercentage } from '../../utils/calculatePercentage'

function AllYear() {
  const [theAllYear, setAllYear] = useState({ label: '', left: 100, spent: 0 })

  const start = new Date(new Date().getFullYear(), 0, 1).setHours(0, 0, 0, 0)
  const now = new Date().getTime()
  const end = new Date(new Date().getFullYear(), 11, 31).setHours(23, 59, 59, 999)

  const update = {
    label: 'All year',
    left: calculatePercentage(start, now, end).timeLeft,
    spent: calculatePercentage(start, now, end).timeSpent,
  }

  useEffect(() => {
    if (update) {
      setAllYear(update)
    }
  }, [update.left])

  return theAllYear
}

export { AllYear }
