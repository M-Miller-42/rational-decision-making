<script setup>
import { computed, ref } from 'vue'
import { availableTypes } from './criterionTypes/AvailableTypes'

defineProps({
  show: Boolean
})
const emit = defineEmits(['added', 'close'])

const name = ref('')
const type = ref('')

const isValid = computed(() => {
  const value = name.value.trim()
  return !!value
})

function addAndClose() {
  emit('added', name.value, type.value)
  name.value = ''
  emit('close')
}
</script>

<template>
  <Teleport to="body" v-if="show">
    <div
      class="modal-mask"
      @click.self="$emit('close')"
      @keyup.esc="$emit('close')"
    >
      <form class="modal-container" @submit="addAndClose">
        <h1>New criterion</h1>

        <label>
          Name
          <input type="text" v-model="name" required />
        </label>
        <label>
          Type
          <select v-model="type" required>
            <option
              v-for="type in Object.keys(availableTypes)"
              :value="type"
              :key="type"
            >
              {{ type }}
            </option>
          </select>
        </label>
        <button class="modal-default-button" :disabled="!isValid">OK</button>
      </form>
    </div>
  </Teleport>
</template>

<style scoped>
label {
  display: block;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
}

.modal-container {
  width: 300px;
  margin: auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
}

.modal-default-button {
  float: right;
}
</style>
