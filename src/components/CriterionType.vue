<script setup>
import BooleanType from './criterionTypes/BooleanType.vue'

defineProps({
  type: {
    type: String,
    required: true
  }
})

const availableTypes = {
  Boolean: BooleanType
}
</script>

<template v-if="availableTypes[type]">
  <component :is="availableTypes[type]" />
</template>

<style scoped></style>
