// TODAY
import { AllWeek } from './utils/AllWeek'
import { WorkWeek } from './utils/WorkWeek'

function Week() {
  return {
    title: 'Week',
    list: [AllWeek(), WorkWeek()],
  }
}

export { Week }
