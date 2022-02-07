<script setup lang="ts">
import useSelectedToDo from '~/use/useSelectedToDo'

const router = useRouter()
const route = useRoute()

const selectedToDo = ref({
  id: 1,
  text: 'hello',
  completed: false,
}) as any

onMounted(() => {
  selectedToDo.value = useSelectedToDo(route.query.id)
})
</script>

<template>
  <div>
    <ToDoItem
      :id="selectedToDo.id"
      :index="0"
      :text="selectedToDo.title"
      :completed="selectedToDo.completed"
    />
    {{ selectedToDo.id }}
  </div>
  <button @click="router.back()">
    Go Back!
  </button>
</template>
