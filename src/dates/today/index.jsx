// TODAY
import { AllDay } from './utils/AllDay'
import { UntilMidday } from './utils/UntilMidday'
import { UntilMidnight } from './utils/UntilMidnight'

function Today() {
  return {
    title: 'Today',
    list: [AllDay(), UntilMidday(), UntilMidnight()],
  }
}

export { Today }
