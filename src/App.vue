<script setup>
import { ref } from 'vue'
import OptionsColumn from './components/OptionsColumn.vue'

const options = ref([])
</script>

<template>
  <main>
    <OptionsColumn :options @added="(newValue) => options.push(newValue)" />
  </main>
</template>

<style scoped>
</style>
