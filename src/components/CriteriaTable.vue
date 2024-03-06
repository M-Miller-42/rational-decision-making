<script setup>
import { inject, ref } from 'vue'
import CriterionColumn from './CriterionColumn.vue'
import NewCriterionDialog from './NewCriterionDialog.vue'

defineProps({
  criteria: { type: Array, required: true },
  optionsScores: { type: Array, required: true }
})

const showDialog = ref(false)

const addCriterion = inject('addCriterion')
</script>

<template>
  <template v-for="criterion in criteria" :key="criterion.id">
    <div class="criterion-name">
      {{ criterion.name }}
      <div class="small dimmed">{{ criterion.type }}</div>
    </div>
    <CriterionColumn :criterion :optionsScores />
  </template>
  <button @click="showDialog = true" class="header">+</button>
  <NewCriterionDialog :showDialog @close="showDialog = false" @added="addCriterion" />
</template>

<style scoped>
.criterion-name,
button {
  grid-row: 1;
}
button {
  font-size: 2em;
}
</style>
