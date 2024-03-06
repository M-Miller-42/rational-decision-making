<script setup>
import { computed } from 'vue'

const props = defineProps({
  optionsScores: { type: Array, required: true }
})

const scoreSums = computed(() =>
  props.optionsScores.map((optionScore) => optionScore.reduce((sum, score) => sum + score, 0))
)
</script>

<template>
  <div class="header">Scores</div>
  <div v-for="sum in scoreSums">{{ sum }}</div>
</template>

<style scoped>
.header {
  grid-row: 1;
}
</style>
