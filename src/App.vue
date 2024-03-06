<script setup>
import { ref, provide } from 'vue'
import OptionsColumn from './components/OptionsColumn.vue'
import CriteriaTable from './components/CriteriaTable.vue'

const options = ref([])
const criteria = ref([])
let criteriaCounter = 0

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
    <CriteriaTable :criteria />
  </main>
  <pre>State: {{ JSON.stringify({ options, criteria }, null, 2) }}</pre>
</template>

<style>
main {
  display: grid;
  place-items: center;
  grid-auto-flow: column;
  grid-auto-columns: minmax(5em, auto);
  gap: 0.7em;
  background: gainsboro;
  padding: 1em;
}

main > div {
  background: white;
  place-self: stretch;
  border-radius: 0.5em;
  padding: 0.8em;
}
</style>
