<script setup>
defineEmits(['change'])
defineProps(['value'])
</script>

<template>
  <input type="checkbox" :checked="value" @change="$emit('change', $event.target.checked)" />
</template>

<style scoped>
input {
  margin: 1em;
}
</style>
