<script setup lang="ts">

const props = defineProps<{
    index: number
    id: number
    text: string
    completed: boolean
}>()

const emit = defineEmits<{
  (e: 'change-state', event: Event, id: number): void
  (e: 'delete', event: Event, id: number): void
}>()
</script>

<template>
  <td>{{props.id}}</td>
  <td :class="{ crossed: !props.completed }">{{props.text}}</td>
  <td>
    <button class="icon-btn mx-2" @click="(event) => {
      emit('change-state', event ,props.id)
      }">
      <carbon-checkmark v-if="props.completed" />
      <carbon-close v-else />
    </button>
  </td>
  <td>
    <button class="icon-btn mx-2" @click="(event) => {
      emit('delete', event , props.id)
      }">
      <carbon-trash-can/>
    </button>
  </td>
</template>
