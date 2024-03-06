<script setup>
import { ref, provide, computed } from 'vue'
import OptionsColumn from './components/OptionsColumn.vue'
import CriteriaTable from './components/CriteriaTable.vue'
import ScoresColumn from './components/ScoresColumn.vue'
import { scoreMapping } from './components/criterionTypes/AvailableTypes'

const options = ref([])
const criteria = ref([])
let criteriaCounter = 0

const optionsScores = computed(() => {
  return options.value.map((_, i) => {
    return criteria.value.map((criterion) => {
      const scoreMap = scoreMapping[criterion.type]
      const score = scoreMap(criterion.values[i])
      return score
    })
  })
})

function updateValue(value, optionIndex, criterionIndex) {
  criteria.value[criterionIndex].values[optionIndex] = value
}

function addCriterion(name, type) {
  criteria.value.push({
    id: criteriaCounter++,
    name,
    type,
    values: Array(options.value.length).fill()
  })
}

function addOption(name) {
  options.value.push(name)
  criteria.value.forEach((c) => c.values.push(undefined))
}

provide('updateValue', updateValue)
provide('addCriterion', addCriterion)
</script>

<template>
  <main>
    <OptionsColumn :options @added="addOption" />
    <CriteriaTable :criteria :optionsScores />
    <ScoresColumn :optionsScores />
  </main>
  <pre>State: {{ JSON.stringify({ options, criteria, optionsScores }, null, 2) }}</pre>
</template>

<style scoped>
main {
  display: grid;
  place-items: center;
  grid-auto-flow: column;
  grid-auto-columns: minmax(7em, auto);
}
pre {
  color: white;
}
</style>
