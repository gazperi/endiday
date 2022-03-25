import { useState, useEffect } from 'react'
import { calculatePercentage } from '../../utils/calculatePercentage'

function UntilMidday() {
  const [theAllDay, setAllDay] = useState({ label: '', left: 100, spent: 0 })

  const start = new Date().setHours(0, 0, 0, 0)
  const now = new Date().getTime()
  const end = new Date().setHours(12, 0, 0, 0)
  if (now > end) {
    var update = {
      label: 'Until midday',
      left: 0,
      spent: 100,
    }
  } else {
    update = {
      label: 'Until midday',
      left: calculatePercentage(start, now, end).timeLeft,
      spent: calculatePercentage(start, now, end).timeSpent,
    }
  }

  useEffect(() => {
    if (update) {
      setAllDay(update)
    }
  }, [update.left])

  return theAllDay
}

export { UntilMidday }
