<script setup>
import { ref, provide, computed } from 'vue'
import OptionsColumn from './components/OptionsColumn.vue'
import CriteriaTable from './components/CriteriaTable.vue'
import ScoresColumn from './components/ScoresColumn.vue'
import { scoreMapping } from './components/criterionTypes/AvailableTypes'

const options = ref([])
const criteria = ref([])
const order = ref([])
let criteriaCounter = 0

const optionsScores = computed(() =>
  options.value.map((_, i) =>
    criteria.value.map((criterion) => {
      const scoreMap = scoreMapping[criterion.type]
      const score = scoreMap(criterion.values[i])
      return score
    })
  )
)

const weightedOptionsScores = computed(() =>
  optionsScores.value.map((scores) =>
    scores.map((score, critIndex) => criteria.value[critIndex].weight * score)
  )
)

function updateValue(value, optionIndex, criterionIndex) {
  criteria.value[criterionIndex].values[optionIndex] = value
}

function addCriterion(name, type) {
  criteria.value.push({
    id: criteriaCounter++,
    name,
    type,
    weight: 1,
    values: Array(options.value.length).fill()
  })
}

function addOption(name) {
  options.value.push(name)
  order.value.push(options.value.length - 1)
  criteria.value.forEach((c) => c.values.push(undefined))
}

function sort(sortBy) {
  // Make a copy to avoid mutations during sorting
  order.value = order.value.slice().sort(sortBy)
}

provide('updateValue', updateValue)
provide('addCriterion', addCriterion)
</script>

<template>
  <main>
    <OptionsColumn :options @added="addOption" :order />
    <CriteriaTable :criteria :optionsScores :weightedOptionsScores :order />
    <ScoresColumn :weightedOptionsScores :order @sort="sort" />
  </main>
  <pre>State: {{ JSON.stringify({ options, criteria, order, optionsScores }, null, 2) }}</pre>
</template>

<style scoped>
main {
  display: grid;
  place-items: center;
  grid-auto-flow: column;
  grid-auto-columns: minmax(8em, auto);
}

pre {
  color: white;
}
</style>
