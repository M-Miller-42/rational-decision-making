<script setup>
import { ref } from 'vue'
import OptionsColumn from './components/OptionsColumn.vue'
import CriteriaTable from './components/CriteriaTable.vue'

const options = ref([])
const criteria = ref([])
let criteriaCounter = 0;

function addCriterion(name, type) {
  criteria.value.push({ id: criteriaCounter++, name, type, values: Array(options.value.length).fill() })
}

function addOption(name) {
  options.value.push(name)
  criteria.value.forEach((c) => c.values.push(undefined))
}
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
