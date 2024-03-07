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
  <div class="option">Options</div>
  <TransitionGroup>
    <div v-for="optionIndex of order" :key="optionIndex" class="option">
      {{ options[optionIndex] }}
    </div>
  </TransitionGroup>

  <input @keyup.enter="addOption" placeholder="New option name" />
</template>

<style scoped>
div,
input {
  grid-column: 1;
  font-weight: bold;
}
input {
  width: 12em;
}
</style>
