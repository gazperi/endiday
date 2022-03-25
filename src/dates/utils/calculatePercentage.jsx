import { useState, useEffect } from 'react'
import _ from 'lodash'

function calculatePercentage(start, now, end) {
  const [thePercentage, setPercentage] = useState({ timeLeft: 100, timeSpent: 0 })

  useEffect(() => {
    if ((start, now, end)) {
      const newTimeSpent = ((now - start) * 100) / (end - start)
      const newTimeLeft = 100 - newTimeSpent
      setPercentage({
        timeLeft: _.floor(newTimeLeft, 2),
        timeSpent: _.ceil(newTimeSpent, 2),
      })
    }
  }, [start, end])

  return thePercentage
}

export { calculatePercentage }
