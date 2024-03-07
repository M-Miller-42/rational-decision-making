<script setup>
import { computed } from 'vue'
import DialogTemplate from './DialogTemplate.vue'

const props = defineProps({
  show: { type: Boolean, required: true },
  criteria: { type: Array, required: true }
})

const weightsTotal = computed(() =>
  props.criteria.reduce((sum, criterion) => sum + criterion.weight, 0)
)
</script>

<template>
  <DialogTemplate :show>
    <template #heading>Weights</template>
    <div class="sliders">
      <label v-for="criterion of criteria" :key="criterion.id">
        <input
          type="range"
          orient="vertical"
          min="0"
          max="10"
          :value="criterion.weight"
          @input="criterion.weight = +$event.target.value"
        />
        <div>{{ criterion.name }}</div>
        <div class="small">{{ criterion.weight }}</div>
        <div class="small dimmed">
          ({{ ((criterion.weight * 100) / weightsTotal).toFixed(0) }}%)
        </div>
      </label>
    </div>
  </DialogTemplate>
</template>

<style scoped>
.sliders {
  display: flex;
}

label {
  flex: 0 1 5em;
  margin: 0.5em;
  min-width: 3em;
}
</style>
