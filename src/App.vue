<script setup>
import { ref, provide } from 'vue'
import OptionsColumn from './components/OptionsColumn.vue'
import CriteriaTable from './components/CriteriaTable.vue'

const options = ref([])
const criteria = ref([])
let criteriaCounter = 0;

function updateValue(value, optionIndex, criterionIndex) {
  criteria.value[criterionIndex].values[optionIndex] = value
}

function addCriterion(name, type) {
  criteria.value.push({ id: criteriaCounter++, name, type, values: Array(options.value.length).fill() })
}

function addOption(name) {
  options.value.push(name)
  criteria.value.forEach((c) => c.values.push(undefined))
}

provide('updateValue', updateValue)
</script>

<template>
  <main>
    <OptionsColumn :options @added="addOption" />
    <CriteriaTable :criteria @added="addCriterion" />
  </main>
  <pre>State: {{ JSON.stringify({ options, criteria }, null, 2) }}</pre>
</template>

<style scoped>
main {
  display: grid;
  place-items: center;
  grid-auto-flow: column;
  grid-auto-columns: minmax(5em, auto);
  gap: 0.2em;
}
</style>
