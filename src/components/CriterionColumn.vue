<script setup>
import { inject } from 'vue'
import { availableTypes } from './criterionTypes/AvailableTypes'

defineProps({
  criterion: { type: Object, required: true },
  order: { type: Array, required: true },
  optionsScores: { type: Array, required: true },
  weightedOptionsScores: { type: Array, required: true }
})

const updateValue = inject('updateValue')
</script>

<template>
  <TransitionGroup>
    <div
      v-for="optionIndex of order"
      :key="optionIndex"
      class="center-vertically"
    >
      <component
        :is="availableTypes[criterion.type]"
        :value="criterion.values[optionIndex]"
        @change="(value) => updateValue(value, optionIndex, criterion.id)"
      />
      <div class="small dimmed">
        Points: {{ optionsScores[optionIndex][criterion.id] }}
      </div>
      <div class="small dimmed">
        Weighted: {{ weightedOptionsScores[optionIndex][criterion.id] }}
      </div>
    </div>
  </TransitionGroup>
</template>

<style scoped></style>
