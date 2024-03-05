<script setup>
defineProps({
  criteria: Array,
  options: Array
})

defineEmits(['added'])
</script>

<template>
  <template v-for="criterion in criteria">
    <div class="criterion-name">{{ criterion }}</div>
    <div v-for="_ in options.length">{{ criterion }}</div>
  </template>
  <button @click="$emit('added', 'Boolean')">+</button>
</template>

<style scoped>
.criterion-name,
button {
  grid-row: 1;
}
</style>
