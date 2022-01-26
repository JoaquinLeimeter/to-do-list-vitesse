<script setup lang="ts">
interface Todo {
  id: number
  text: string
  completed: boolean
}

const todoList = ref<Todo[]>([
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
  {
    id: 2,
    text: 'code',
    completed: false,
  },
  {
    id: 45,
    text: 'go to the supermarket',
    completed: true,
  },
])
const changeState = (e: Event, id: number): void => {
  todoList.value.forEach((item) => {
    if (item.id === id)
      item.completed = !item.completed
  })
}
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
              <button @click="changeState(e, item.id)">
                <carbon-checkmark v-if="item.completed" />
                <carbon-close v-else />
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
    align-items: center;
    margin: auto;
  }
  .container > h1 {
    font-size: 2rem;
    font-weight: 700;
    margin: 2rem 0;
  }
  .todo-list{
    padding: 50px;
    border: 3px solid red;
    text-align: left;
  }
  .content-table{
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 1.5rem;
    min-width: 500px;
  }
  .content-table thead tr {
    background-color: rgb(83, 83, 83);
    text-align: left;
    color: #FFF;
  }
  .content-table th,
  .content-table td {
    padding: 12px 15px;
  }
  .content-table tbody tr{
    border-bottom: 1px solid green;
  }
</style>

<route lang="yaml">
meta:
  layout: home
</route>
