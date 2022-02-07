<script setup lang="ts">
import { store } from '../stores'

const props = defineProps<{
  id: number
  text: string
  completed: boolean
}>()
const { id, text, completed } = toRefs(props)
const emit = defineEmits<{
  (e: 'change-state', event: Event, id: number): void
  (e: 'delete', event: Event, id: number): void
  (e: 'selectedId', id: number): void
}>()

const router = useRouter()
const go = () => {
  store.commit('selectTodo', props)
  router.push('/details')
}

</script>

<template>
  <td>{{ id }}</td>
  <td :class=" completed && 'crossed' " @click="go">
    {{ text }}
  </td>
  <td class="overflow-hidden overflow-ellipsis w-[12.5rem]">
    <button
      class="icon-btn mx-2" @click="(event) => {
        emit('change-state', event ,id)
      }"
    >
      <span v-if="completed">Completed</span>
      <span v-else>Not completed</span>
    </button>
  </td>
  <td>
    <button
      class="icon-btn mx-2" @click="(event) => {
        emit('delete', event , id)
      }"
    >
      <carbon-trash-can />
    </button>
  </td>
</template>
