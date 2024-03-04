<script setup>
import CriterionType from './CriterionType.vue';

defineProps({
  criteria: Array,
  options: Array
})

defineEmits(['added'])
</script>

<template>
  <template v-for="criterion in criteria">
    <div class="criterion-name">{{ criterion }}</div>
    <CriterionType v-for="_ in options.length" :type="criterion" />
  </template>
  <button @click="$emit('added', 'Boolean')">+</button>
</template>

<style scoped>
.criterion-name,
button {
  grid-row: 1;
}
</style>
