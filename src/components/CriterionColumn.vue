<script setup>
import { inject } from 'vue'
import { availableTypes } from './criterionTypes/AvailableTypes'

defineProps({
  criterion: { type: Object, required: true },
  order: { type: Array, required: true },
  optionsScores: { type: Array, required: true }
})

const updateValue = inject('updateValue')
</script>

<template>
  <div v-for="optionIndex of order" :key="optionIndex">
    <component
      :is="availableTypes[criterion.type]"
      :value="criterion.values[optionIndex]"
      @change="(value) => updateValue(value, optionIndex, criterion.id)"
    />
    <div class="small dimmed">Points: {{ optionsScores[optionIndex][criterion.id] }}</div>
  </div>
</template>

<style scoped></style>
