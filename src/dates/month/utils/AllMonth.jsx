import { useState, useEffect } from 'react'
import { calculatePercentage } from '../../utils/calculatePercentage'

function AllMonth() {
  const [theAllMonth, setAllMonth] = useState({ label: '', left: 100, spent: 0 })

  const start = new Date(new Date().setDate(1)).setHours(0, 0, 0, 0)
  const now = new Date().getTime()

  // end
  switch (new Date().getMonth()) {
    case 0:
    case 2:
    case 4:
    case 6:
    case 7:
    case 9:
    case 11:
      var end = new Date(new Date().setDate(31)).setHours(23, 59, 59, 999)
      break
    case 1:
      end = new Date(new Date().setDate(28)).setHours(23, 59, 59, 999)
      break
    default:
      end = new Date(new Date().setDate(30)).setHours(23, 59, 59, 999)
  }

  const update = {
    label: 'All month',
    left: calculatePercentage(start, now, end).timeLeft,
    spent: calculatePercentage(start, now, end).timeSpent,
  }

  useEffect(() => {
    if (update) {
      setAllMonth(update)
    }
  }, [update.left])

  return theAllMonth
}

export { AllMonth }
