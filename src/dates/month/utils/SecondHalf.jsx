import { useState, useEffect } from 'react'
import { calculatePercentage } from '../../utils/calculatePercentage'

function SecondHalf() {
  const [theSecondHalf, setSecondHalf] = useState({ label: '', left: 100, spent: 0 })

  const now = new Date().getTime()

  switch (new Date().getMonth()) {
    case (0, 2, 4, 6, 7, 9, 11):
      var start = new Date(new Date().setDate(16)).setHours(0, 0, 0, 0)
      var end = new Date(new Date().setDate(31)).setHours(23, 59, 59, 999)
      break
    case 1:
      start = new Date(new Date().setDate(14)).setHours(0, 0, 0, 0)
      end = new Date(new Date().setDate(28)).setHours(23, 59, 59, 999)
      break
    default:
      start = new Date(new Date().setDate(15)).setHours(0, 0, 0, 0)
      end = new Date(new Date().setDate(30)).setHours(23, 59, 59, 999)
  }

  if (now < start) {
    var update = {
      label: 'Second half',
      left: 100,
      spent: 0,
    }
  } else {
    update = {
      label: 'Second half',
      left: calculatePercentage(start, now, end).timeLeft,
      spent: calculatePercentage(start, now, end).timeSpent,
    }
  }

  useEffect(() => {
    if (update) {
      setSecondHalf(update)
    }
  }, [update.left])

  return theSecondHalf
}

export { SecondHalf }
