<script setup lang="ts">
import useSelectedToDo from '../use/useSelectedToDo'

const router = useRouter()

const selectedToDo = ref({})
const selectedToDoId = ref<any>(0)

onMounted(() => {
  let urlParams = new URLSearchParams(window.location.search);
  selectedToDoId.value = urlParams.get('id')
  selectedToDo.value = useSelectedToDo(selectedToDoId.value)
  console.log('SELECTEDTODO', selectedToDo.value)
})
</script>

<template>
  <div>
    <ToDoItem
      :index="0"
      :id="selectedToDo.id"
      :text="selectedToDo.title"
      :completed="selectedToDo.completed"
    ></ToDoItem>
  </div>
  <button  @click="router.back()">Go Back!</button>
</template>