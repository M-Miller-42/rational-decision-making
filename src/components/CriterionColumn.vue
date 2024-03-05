<script setup>
import { inject } from 'vue';
import BooleanType from './criterionTypes/BooleanType.vue'

defineProps({
  criterion: {}
})

const availableTypes = {
  Boolean: BooleanType
}

</script>

<template>
  <template v-if="availableTypes[criterion.type]">
    <component v-for="(value, optionIndex) in criterion.values" :key="optionIndex" :is="availableTypes[criterion.type]"
      :value />
  </template>
</template>

<style scoped></style>
