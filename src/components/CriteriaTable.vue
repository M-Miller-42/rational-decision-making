<script setup>
import { inject } from 'vue'
import CriterionColumn from './CriterionColumn.vue'

defineProps({
  criteria: Array
})

const addCriterion = inject('addCriterion')
</script>

<template>
  <template v-for="criterion in criteria" :key="criterion.id">
    <div class="criterion-name">
      {{ criterion.name }}
      <span>{{ criterion.type }}</span>
    </div>
    <CriterionColumn :criterion />
  </template>
  <button @click="addCriterion('myname', 'Boolean')">+</button>
</template>

<style scoped>
.criterion-name,
button {
  grid-row: 1;
}
</style>
