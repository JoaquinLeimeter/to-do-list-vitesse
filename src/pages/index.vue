<script setup lang="ts">
const todoList = ref([
  {
    id: 0,
    text: 'go to bathroom',
    completed: true,
  },
  {
    id: 1,
    text: 'flush',
    completed: false,
  },
])
</script>

<template>
  <div class="container">
    <div class="todo-list">
      <ul>
        <li v-for="item in todoList" :key="item.id">
          {{ item.text }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
  .container{
    display: flex;
    flex-direction: column;
    margin: auto;
  }
  .todo-list{
    background-color: burlywood;
    padding: 50px;
  }
</style>

<route lang="yaml">
meta:
  layout: home
</route>
