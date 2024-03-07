<script setup>
import { computed } from 'vue'

const props = defineProps({
  weightedOptionsScores: { type: Array, required: true },
  order: { type: Array, required: true }
})

defineEmits(['sort'])

const scoreSums = computed(() =>
  props.weightedOptionsScores.map((optionScore) =>
    optionScore.reduce((sum, score) => sum + score, 0)
  )
)

const isSorted = computed(() =>
  props.order.every(
    (_, i) => i === 0 || scoreSums.value[props.order[i - 1]] >= scoreSums.value[props.order[i]]
  )
)

function sortByScoreSums(a, b) {
  return scoreSums.value[b] - scoreSums.value[a]
}
</script>

<template>
  <div :class="[{ active: !isSorted }, 'header']" @click="$emit('sort', sortByScoreSums)">
    Scores
    <div class="'small">Sort ▼</div>
  </div>
  <TransitionGroup>
    <div v-for="optionIndex of order" :key="optionIndex">{{ scoreSums[optionIndex] }}</div>
  </TransitionGroup>
</template>

<style scoped>
.header {
  grid-row: 1;
  font-weight: bold;
}

.active div {
  color: var(--accent);
}
</style>
