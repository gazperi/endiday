// Month
import { AllMonth } from './utils/AllMonth'
import { FirstHalf } from './utils/FirstHalf'
import { SecondHalf } from './utils/SecondHalf'

function Month() {
  return {
    title: 'Month',
    list: [AllMonth(), FirstHalf(), SecondHalf()],
  }
}

export { Month }
