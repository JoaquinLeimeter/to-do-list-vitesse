<script setup lang="ts">
import AddTodo from "../components/AddTodo.vue";
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
    return
  })
}
const deleteItem = (e: Event, id: number): void => {
  todoList.value = todoList.value.filter((item) => item.id !== id)
}
const addTask = (text: string) => {
  todoList.value = [
    ...todoList.value,
    {
      id: new Date().valueOf(),
      text,
      completed: true
    }
  ]
}
const showIncompleteTodos = ref(false)
const filterTodos = () => showIncompleteTodos.value = !showIncompleteTodos.value

const showModal = ref(false)
</script>

<template>
  <!-- is it better if showModal = false is a function declared in <script> ? -->
  <Modal v-if="showModal" @close-modal="() => showModal = false">
    <AddTodo @task-submitted="addTask" @close-modal="() => showModal = false"></AddTodo>
  </Modal>
  <div class="flex flex-col m-auto items-center">
    <h1 class="text-lg mx-0 my-8 text-2xl font-bold my-8 mx-0">To Do List</h1>
    <div class="p-[3.125rem] pt-0 border-3 border-[#008080] text-left w-[37.5rem] todo-list">
      <button class="filterButton" @click="filterTodos" v-if="!showIncompleteTodos">show incomplete tasks</button>
      <button class="filterButton" @click="filterTodos" v-else>undo</button>
      <table class="content-table border-collapse w-min-[31.25rem] text-2xl">
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
              v-if="!showIncompleteTodos || item.completed"
              :index="index"
              :id="item.id"
              :text="item.text"
              :completed="item.completed"
              @change-state="changeState"
              @delete="deleteItem"
            ></ToDoItem>
          </tr>
        </tbody>
      </table>
    </div>
    <button @click="() => showModal = true" class="px-7 py-3 mt-5 border border-grey-400/50 rounded-sm ">Add Task!</button>
  </div>
</template>

<style >
/* animation */
.todo-list {
  box-shadow: 0px 0px 5px 2px #008080;
  transition: box-shadow 1000ms;
}
.todo-list:hover {
  box-shadow: 0px 0px 20px 10px #33afaf7c;
}
/* here I reference list items so I do it with selectors instead of WindiCSS */
.content-table thead tr {
  background-color: #008080;
  text-align: left;
  color: #fff;
}
.content-table th,
.content-table td {
  padding: 12px 15px;
}
.content-table tbody tr {
  border-bottom: 1px solid #7c7c7c;
}
/* this class is not using windiCSS because it's the same for 2 buttons */
.filterButton {
  padding: 0.25rem 1rem;
  margin: 1.25rem 0;
  float: right;
  border: 1px solid #FFF;
  white-space: nowrap;
}
/* I didnt find text-decoration-color or thickness in windiCSS */
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
