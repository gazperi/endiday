import { useState, useEffect } from 'react'
import { calculatePercentage } from '../../utils/calculatePercentage'

function UntilMidnight() {
  const [theAllDay, setAllDay] = useState({ label: '', left: 100, spent: 0 })

  const start = new Date().setHours(12, 0, 0, 0)
  const now = new Date().getTime()
  const end = new Date().setHours(23, 59, 59, 999)
  if (start > now) {
    var update = {
      label: 'From midday to midnight',
      left: 100,
      spent: 0,
    }
  } else {
    update = {
      label: 'From midday to midnight',
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

export { UntilMidnight }
