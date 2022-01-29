<script setup lang='ts'>
const emit = defineEmits(['closeModal'])
</script>

<template>
  <div class="background">
    <div class="modal">
      <div class="header">
        <h2>Add Task</h2>
        <button @click="() => emit('closeModal')">
          <carbon-close></carbon-close>
        </button>
      </div>
      <div class="body">
        <slot></slot>
        <!-- here goes the form -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.background {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.466);
  z-index: 1000;
}
.modal {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 500px;
  background-color: red;
  margin: auto;
  margin-top: 50px;
}
.header {
  display: flex;
  justify-content: space-between;
  background-color: royalblue;
}
.header h2 {
  padding: 0.3rem 1.6rem;
}
</style>