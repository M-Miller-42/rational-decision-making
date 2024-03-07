<script setup>
import { inject, ref } from 'vue'
import CriterionColumn from './CriterionColumn.vue'
import NewCriterionDialog from './NewCriterionDialog.vue'
import EditCriterionDialog from './EditCriterionDialog.vue'

defineProps({
  criteria: { type: Array, required: true },
  optionsScores: { type: Array, required: true },
  weightedOptionsScores: { type: Array, required: true },
  order: { type: Array, required: true }
})

const showNewDialog = ref(false)
const showEditDialog = ref(false)

const addCriterion = inject('addCriterion')
</script>

<template>
  <template v-for="criterion in criteria" :key="criterion.id">
    <div @click="showEditDialog = true" class="criterion-name active">
      {{ criterion.name }}
      <div class="small dimmed">{{ criterion.type }}</div>
      <div class="small dimmed">Weight:{{ criterion.weight }}</div>
    </div>
    <CriterionColumn :criterion :optionsScores :weightedOptionsScores :order />
  </template>
  <button @click="showNewDialog = true" class="header">+</button>
  <NewCriterionDialog :show="showNewDialog" @close="showNewDialog = false" @added="addCriterion" />
  <EditCriterionDialog :show="showEditDialog" :criteria @close="showEditDialog = false" />
</template>

<style scoped>
.criterion-name {
  font-weight: bold;
}
.criterion-name,
button {
  grid-row: 1;
}
button {
  font-size: 2em;
}
</style>
