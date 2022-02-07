<script setup lang="ts">
import useSelectedToDo from '~/use/useSelectedToDo'

const router = useRouter()
const route = useRoute()

const selectedToDo = ref({}) as any

onMounted(() => {
  selectedToDo.value = useSelectedToDo(route.query.id)
})
</script>

<template>
  <div class="bg-red-600 p-10 flex align-middle justify-center table-content">
    <ToDoItem
      :id="selectedToDo.id"
      :index="0"
      :text="selectedToDo.title"
      :completed="selectedToDo.completed"
    />
  </div>
  <button @click="router.back()">
    Go Back!
  </button>
</template>
