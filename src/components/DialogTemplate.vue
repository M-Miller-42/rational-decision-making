<script setup>
const emit = defineProps({
  show: { type: Boolean, required: true }
})

defineEmits(['close', 'submit'])

const submitAndClose = () => {
  emit('submit')
  emit('close')
}
</script>

<template>
  <Teleport to="body" v-if="show">
    <div class="modal-mask" @click.self="$emit('close')" @keyup.esc="$emit('close')">
      <form class="modal-container" @submit.prevent="submitAndClose">
        <h1>
          <slot name="heading" />
        </h1>
        <slot />
        <slot name="footer">
          <button class="modal-default-button">Close</button>
        </slot>
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
