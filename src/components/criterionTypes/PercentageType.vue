<script setup>
defineEmits(['change'])
defineProps(['value'])
</script>

<template>
  <div>
    <div>{{ value }}%</div>
    <input type="range" min="0" max="100" @change="$emit('change', $event.target.value)" />
  </div>
</template>

<style scoped></style>
