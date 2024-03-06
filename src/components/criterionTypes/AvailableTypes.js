import BooleanType from './BooleanType.vue'
import PercentageType from './PercentageType.vue'

export const availableTypes = {
  Boolean: BooleanType,
  Percent: PercentageType
}

const replaceNaN = (value) => (isNaN(value) ? 0 : +value)

export const scoreMapping = {
  Boolean: (value) => replaceNaN(value) * 100,
  Percent: (value) => replaceNaN(value)
}
