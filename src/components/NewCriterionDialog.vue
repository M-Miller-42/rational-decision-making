<script setup>
import { computed, ref } from 'vue'
import { availableTypes } from './criterionTypes/AvailableTypes'
import DialogTemplate from './DialogTemplate.vue'

defineProps({
  show: Boolean
})
const emit = defineEmits(['added'])

const name = ref('')
const type = ref('')

const isValid = computed(() => {
  const value = name.value.trim()
  return !!value
})

function addNewCriterion() {
  emit('added', name.value, type.value)
  name.value = ''
}
</script>

<template>
  <DialogTemplate :show @submit="addNewCriterion">
    <template #heading>New criterion</template>
    <label>
      Name
      <input type="text" v-model="name" required />
    </label>
    <label>
      Type
      <select v-model="type" required>
        <option
          v-for="typeName of Object.keys(availableTypes)"
          :value="typeName"
          :key="typeName"
        >
          {{ typeName }}
        </option>
      </select>
    </label>
    <template #footer>
      <button class="modal-default-button" :disabled="!isValid">OK</button>
    </template>
  </DialogTemplate>
</template>

<style scoped>
label {
  display: block;
}
</style>
