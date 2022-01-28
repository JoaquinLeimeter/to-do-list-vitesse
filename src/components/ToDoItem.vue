<script setup lang="ts">

const props = defineProps<{
  index: number
  id: number
  text: string
  completed: boolean
}>()
const { index, id, text, completed } = toRefs(props);
const emit = defineEmits<{
  (e: 'change-state', event: Event, id: number): void
  (e: 'delete', event: Event, id: number): void
}>()
</script>

<template>
  <td>{{index + 1}}</td>
  <td :class=" !completed && 'crossed' ">{{text}}</td>
  <td>
    <button class="icon-btn mx-2" @click="(event) => {
      emit('change-state', event ,id)
      }">
      <carbon-checkmark v-if="completed" />
      <carbon-close v-else />
    </button>
  </td>
  <td>
    <button class="icon-btn mx-2" @click="(event) => {
      emit('delete', event , id)
      }">
      <carbon-trash-can/>
    </button>
  </td>
</template>
