<script setup>
import { ref } from 'vue'
import OptionsColumn from './components/OptionsColumn.vue'
import CriteriaTable from './components/CriteriaTable.vue'

const options = ref([])
const criteria = ref([])
</script>

<template>
  <main>
    <OptionsColumn :options @added="(newValue) => options.push(newValue)" />
    <CriteriaTable :options :criteria @added="(newValue) => criteria.push(newValue)" />
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
