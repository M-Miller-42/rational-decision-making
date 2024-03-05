<script setup>
import { inject } from 'vue'
import BooleanType from './criterionTypes/BooleanType.vue'

defineProps({
  criterion: {}
})

const availableTypes = {
  Boolean: BooleanType
}

const updateValue = inject('updateValue')
</script>

<template>
  <template v-if="availableTypes[criterion.type]">
    <component
      v-for="(value, optionIndex) in criterion.values"
      :key="optionIndex"
      :is="availableTypes[criterion.type]"
      :value
      @change="(value) => updateValue(value, optionIndex, criterion.id)"
    />
  </template>
</template>

<style scoped></style>
