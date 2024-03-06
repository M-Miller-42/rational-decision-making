<script setup>
defineProps({
  options: { type: Array, required: true },
  order: { type: Array, required: true }
})

const emit = defineEmits(['added'])

function addOption(e) {
  const value = e.target.value.trim()
  if (value) {
    emit('added', value)
    e.target.value = ''
  }
}
</script>

<template>
  <div>Options</div>
  <div v-for="optionIndex of order" :key="optionIndex">{{ options[optionIndex] }}</div>
  <input @keyup.enter="addOption" placeholder="New option name" />
</template>

<style scoped>
div,
input {
  grid-column: 1;
  font-weight: bold;
}
</style>
