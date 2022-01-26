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
    <h1>To Do List</h1>
    <div class="todo-list">
      <table class="content-table">
        <thead>
          <tr>
            <th>#</th>
            <th>to do</th>
            <th>completed?</th>
            <th>done</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in todoList" :key="item.id">
            <td>
              {{ item.id }}
            </td>
            <td>
          {{ item.text }}
            </td>
            <td>
              {{ item.completed.toString() }}
            </td>
            <td>
              <button @click="changeState(e, item.id)">
                toggle
              </button>
            </td>
          </tr>
        </tbody>
      </table>
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
