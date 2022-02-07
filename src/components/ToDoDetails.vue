<script setup lang="ts">
import { store } from '../stores'

const router = useRouter()

const selectedTodo = computed(() => store.state.selectedTodo)

const goBack = () => {
  router.back()
}
</script>

<template>
  <div class="bg-red-600 p-10 flex align-middle justify-center table-content">
    <ToDoItem
      :id="selectedTodo.id"
      :index="0"
      :text="selectedTodo.text"
      :completed="selectedTodo.completed"
    />
  </div>
  <button @click="goBack()">
    Go Back!
  </button>
</template>
