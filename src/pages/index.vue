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
const deleteItem = (e: Event, id: number): void => {
  todoList.value = todoList.value.filter((item) => item.id !== id)
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
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in todoList" :key="item.id">
            <ToDoItem 
              :index="index" 
              :id="item.id" 
              :text="item.text" 
              :completed="item.completed"
              @change-state="changeState" 
              @delete="deleteItem"></ToDoItem>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style >
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
  /* LIST */
  .todo-list{
    padding: 50px;
    border: 3px solid #008080;
    text-align: left;
    box-shadow: 0px 0px 5px 2px #008080;
    transition: box-shadow 1000ms;
  }
  .todo-list:hover{
    box-shadow: 0px 0px 20px 10px #33afaf7c
  }
  .content-table{
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 1.5rem;
    min-width: 500px;
  }
  .content-table thead tr {
    background-color: #008080;
    text-align: left;
    color: #FFF;
  }
  .content-table th,
  .content-table td {
    padding: 12px 15px;
  }
  .content-table tbody tr {
    border-bottom: 1px solid #7C7C7C;
  }
  .content-table button {
    display: inline;
  }
  .crossed {
    text-decoration: line-through;
    text-decoration-color: rgb(165, 28, 28);
    text-decoration-thickness: 4px;
  }
</style>

<route lang="yaml">
meta:
  layout: home
</route>
