<script setup>
import { inject, ref } from 'vue'
import CriterionColumn from './CriterionColumn.vue'
import NewCriterionDialog from './NewCriterionDialog.vue'

defineProps({
  criteria: Array
})

const showDialog = ref(false)

const addCriterion = inject('addCriterion')
</script>

<template>
  <template v-for="criterion in criteria" :key="criterion.id">
    <div class="criterion-name">
      {{ criterion.name }}
      <div>{{ criterion.type }}</div>
    </div>
    <CriterionColumn :criterion />
  </template>
  <button @click="showDialog = true">+</button>
  <NewCriterionDialog :showDialog @close="showDialog = false" @added="addCriterion" />
</template>

<style scoped>
.criterion-name,
button {
  grid-row: 1;
}
</style>
