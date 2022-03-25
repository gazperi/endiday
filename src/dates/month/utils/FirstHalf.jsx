import { useState, useEffect } from 'react'
import { calculatePercentage } from '../../utils/calculatePercentage'

function FirstHalf() {
  const [theFirstHalf, setFirstHalf] = useState({ label: '', left: 100, spent: 0 })

  const start = new Date(new Date().setDate(1)).setHours(0, 0, 0, 0)
  const now = new Date().getTime()

  // end
  switch (new Date().getMonth()) {
    case (0, 2, 4, 6, 7, 9, 11):
      var end = new Date(new Date().setDate(16)).setHours(23, 59, 59, 999)
      break
    case 1:
      end = new Date(new Date().setDate(14)).setHours(23, 59, 59, 999)
      break
    default:
      end = new Date(new Date().setDate(15)).setHours(23, 59, 59, 999)
  }

  if (now > end) {
    var update = {
      label: 'First half',
      left: 0,
      spent: 100,
    }
  } else {
    update = {
      label: 'First half',
      left: calculatePercentage(start, now, end).timeLeft,
      spent: calculatePercentage(start, now, end).timeSpent,
    }
  }

  useEffect(() => {
    if (update) {
      setFirstHalf(update)
    }
  }, [update.left])

  return theFirstHalf
}

export { FirstHalf }
