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
</template>

<style scoped>
</style>
