<script setup>
import { inject } from 'vue'
import { availableTypes } from './criterionTypes/AvailableTypes'

defineProps({
  criterion: { type: Object, required: true },
  optionsScores: { type: Array, required: true }
})

const updateValue = inject('updateValue')
</script>

<template>
  <div v-for="(value, optionIndex) in criterion.values">
    <component
      :is="availableTypes[criterion.type]"
      :value
      @change="(value) => updateValue(value, optionIndex, criterion.id)"
    />
    <div>Points: {{ optionsScores[optionIndex][criterion.id] }}</div>
  </div>
</template>

<style scoped></style>
