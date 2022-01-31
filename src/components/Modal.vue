<script setup lang='ts'>
const emit = defineEmits(['closeModal'])
</script>

<template>
  <div class="fixed z-10 w-full h-full top-0 left-0 bg-opacity-40 bg-dark-300">
    <div class="flex flex-col justify-between w-96 m-auto mt-40 bg-gray-400">
      <div class="flex justify-between">
        <h2 class="px-4 py-2">Add Task</h2>
        <button class="px-4 pt-2 border border-white" @click="() => emit('closeModal')">
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